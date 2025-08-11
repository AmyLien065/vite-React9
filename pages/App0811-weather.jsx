// import Icon from '../src/images/weatherIcon'
import '../src/css/app0811-weather.css'
import { FaUmbrella } from "react-icons/fa";

// const Weather = ({ city, day, time, status }) => {
//     return (
//         <div className='weather'>
//             <h2>城市：{city}</h2>
//             <p>日期：{day}</p>
//             <p>時間：{time}</p>
//             <p>降雨機率：{status}</p>
//         </div>
//     )
// }

// const arrWeather = [
//     {
//         id: 1,
//         city: "台北市",
//         day: "11日",
//         time: "上午6:00~下午6:00",
//         status: "晴午後短暫雷陣雨",
//     }, {
//         id: 2,
//         city: "台北市",
//         day: "11日",
//         time: "下午6:00~上午6:00",
//         status: "多雲短暫陣雨",
//     }, {
//         id: 3,
//         city: "台北市",
//         day: "12日",
//         time: "上午6:00~下午6:00",
//         status: "多雲午後短暫雷陣雨",
//     },

// ]

// const App = () => {
//     return (
//         <div>
//             <h2>台北市</h2>

//             {
//                 arrWeather.map((Weather) => {
//                     return (
//                         <Weather city={Weather.city} ></Weather>

//                     )


//                 }



//                 )
//             }
//             <div>11日</div>
//             <div>11日</div>
//             <div>12日</div>

//         </div>

//     )
// }

const App = () => {
    return (
        <>
            {/* 36小時天氣預報的版型 */}
            <h2>36小時天氣預報</h2>
            <div className='cards'>
                {/* 取得縣市陣列跑迴圈 */}
                <div className='card'>
                    {/* 卡片標題 */}
                    <div className='card-header'>臺北市</div>
                    {/* 卡片內容 */}
                    <div className='card-body'>
                        {/* 取得陣列資料後跑迴圈 */}
                        <div className='item'>
                            {/* 日期 */}
                            <div className='date'>11日</div>
                            {/* 時間 */}
                            <div className='time'>
                                上午6:00  <br />
                                ~<br />
                                下午6:00<br />
                            </div>
                            {/* 天氣圖 */}
                            <div className='weatherPic'>
                                {/* 天氣圖：使用執行路徑，所以要將圖片放在public資料夾中，才讀得到 */}
                                <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="" />

                            </div>
                        </div>





                    </div>







                </div>

                <div className='icon'>icon</div>
                <div className='weather'>降雨機率</div>
            </div>

            <div className='container'>11日
                <div className='location'>臺北市</div>
                <div className='time'>上午6:00~下午6:00</div>
                <div className='icon'>icon</div>
                <div className='weather'>降雨機率</div>
            </div>

            <div className='container'>11日
                <div className='location'>臺北市</div>
                <div className='time'>上午6:00~下午6:00</div>
                <div className='icon'>icon</div>
                <div className='weather'>降雨機率</div>
            </div>





        </>
    )
}

export default App