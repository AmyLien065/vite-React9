import Search from "../components/Search"
import Picture from "../components/Picture"
import { useEffect, useState } from "react";

const Home = () => {
  // 文字方塊內容
  const [input, setInput] = useState('');
  // 存放撈出來的資料
  const [data, setData] = useState([]);
  // 目前頁數
  const [page, setPage] = useState(1);
  // 放目前查詢的內容
  const [curSearch, setCurSearch] = useState('');

  // api key
  const auth = "OpNmzvVvcIqC2wHo80FXCous38Ym44DGCDFtp5iqewojHL8RL1mhQThp";

  // 精選照片的連結，從這裡抓的:https://www.pexels.com/api/documentation/#photos-curated
  // const intialURL = "https://api.pexels.com/v1/curated?per_page=10&page=1";
  const intialURL = `https://api.pexels.com/v1/curated?per_page=10&page=${page}`;

  // 關鍵字搜尋的連結，從這裡抓的::https://www.pexels.com/api/documentation/#photos-search
  // const searchURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=10&page=1`;
  const searchURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=10&page=${page}`;

  // 取得圖庫資料
  const search = async (url) => {
    // 連接上api
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    // 取得json資料
    const photosData = await dataFetch.json();
    // console.log(photosData);
    setData(photosData.photos);

    // 更改頁數load出第2頁，若沒寫這行，會再跑一次預設的那幾張圖
    setPage(2);
  }

  // 更多圖片
  const morePic = async () => {
    let newURL;
    if (curSearch === "") {
      // newURL = `https://api.pexels.com/v1/curated?per_page=10&page=${page}`;
      // 因為跟上面長得一模一樣，所以可以直接貼人家名字
      newURL = intialURL;
    } else {
      // newURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=10&page=${page}`;
      newURL = searchURL;
    }

    // 取資料
    // 連接上api
    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    // 取得資料
    const photosData = await dataFetch.json();
    // 串接陣列資料concat()
    setData(data.concat(photosData.photos));

    // 更改後面load出的頁數，若沒寫這行，會再跑一次預設的那幾張圖
    setPage(page + 1);
  }

  // 網頁一進來時，就呼叫search函式
  useEffect(() => {
    search(intialURL);
  }, [])

  // curSearc異動時，重新取得圖片
  useEffect(() => {
    if (curSearch === "") {
      // 沒有關鍵字，執行預設連結
      search(intialURL);
    } else {
      // 若有關鍵字，執行關鍵字連結
      search(searchURL);
    }
  }, [curSearch])

  return (
    <div>
      {/* 搜尋列 */}
      <Search
        // 按下search按鈕時，將查詢的關鍵字帶入searchURL後，再執行search()
        search={() => {
          setCurSearch(input);
        }}
        // 取得文字方塊內容
        setInput={setInput}
      />

      {/* 顯示圖片 */}
      <div className="pictures">
        {
          // 檢查data是否有資料
          // && => 表示有資料
          data &&
          data.map((pic) => {
            return <Picture key={pic.id} data={pic} />
          })
        }
      </div>

      {/* 更多圖片 */}
      <div className="morePictures">
        <button onClick={morePic}>Load More</button>
      </div>

    </div>
  )
}

export default Home