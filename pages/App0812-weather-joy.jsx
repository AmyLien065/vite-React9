// import Icon from '../src/images/weatherIcon'
import '../src/css/app0811-weather.css';
import { FaUmbrella } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from "axios";


const App = () => {
    // 建立一個react變數，使用useState Hook
    // 存放各縣市資料
    // const[變數名稱, 更改變數名稱的方法] = useState([預設值]);
    const [citys, setCitys] = useState([]);

    // useEffect Hook => 渲染後，只呼叫一次json
    // 取得渲染後的DOM元素，要寫在useEffect
    useEffect(() => {
        // 非同步取資料
        (async () => {
            // 取得public中的json檔
            // const data = await axios.get('./json/....?????'); 為什麼我這邊沒有資料夾？
            // 取得src中的json檔
            const jsonData = await axios.get('../src/json/F-C0032-001.json'); //為什麼我這邊沒有資料夾？

            // 檢查是否連上json
            // console.log(data.data.cwaopendata.dataset);

            //取得個縣市的氣象資料
            const { location } = jsonData.data.cwopendata.dataset;
            console.log(location);

            //將各縣市資料透過setCitys方法，更新citys
            setCitys(location);
        })();
    }, []);


    return (
        <>
            {/* 36小時天氣預報的版型 */}
            {/* Wx(天氣現象)、MaxT(最高溫度)、MinT(最低溫度)、CI(舒適度)、PoP(降雨機率) */}
            <h2>36小時天氣預報</h2>
            <div className='cards'>
                {/* 取得縣市陣列跑迴圈 */}
                <div className='card'>
                    {/* 卡片標題 */}
                    <h2 className='card-header'>臺北市</h2>
                    {/* 卡片內容 */}
                    <div className='card-body'>
                        {/* 取得陣列資料後跑迴圈 */}
                        <div className='item'>
                            {/* 日期 */}
                            <h2 className='date'>11日</h2>
                            {/* 時間 */}
                            <p className='time'>
                                上午6:00  <br />
                                ~<br />
                                下午6:00<br /> </p>
                        </div>
                        {/* 天氣圖 */}
                        <h className='weatherPic'>
                            {/* 天氣圖：使用執行路徑，所以要將圖片放在public資料夾中，才讀得到 */}
                            <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="" />
                        </h>
                        {/* 天氣名稱 */}
                        <p className='weatherName'>晴午後短暫雷陣雨</p>
                        {/* 降雨率pop */}
                        <p className='pop'>
                            <FaUmbrella />
                            80%
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App