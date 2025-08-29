import { useEffect, useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import '../css/app0826b.css'

const App = () => {
    // 建立目前背景圖的變數
    const [currentImgIndex, setCurrentImgIndex] = useState(2);

    // 建立輪播圖片的陣列物件
    const slides = [
        { url: './images/hinada-p1.jpeg', title: 'photo-1' },
        { url: './images/hinada-p2.jpeg', title: 'photo-2' },
        { url: './images/hinada-p3.jpeg', title: 'photo-3' },
        { url: './images/hinada-p4.jpeg', title: 'photo-4' },
    ]

    // 當currentIndex改變時，會觸發useEffect
    useEffect(() => {
        // 每3秒呼叫nextSlide()換下一張圖
        const autoplay = setInterval(() => {
            nextSlide();
        }, 3000);

        // 每3秒後，移除autoplay，這樣才能取得最新的索引編號
        return () => clearInterval(autoplay);
    }, [currentImgIndex]);

    // 切換下一張圖
    const nextSlide = () => {
        // 取得前一張的索引編號，檢查是否為最後一個編號
        // 是 => 回到第一張
        // 否 => 跳到下一張
        setCurrentImgIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
        //三元運算子是什麼？？？
        // prevIndex === slides.length - 1 ? // 確認是不是最後一張 
        //0  是的話則回到第一張
        //: prevIndex + 1
    }
    // 切換上一張圖
    const prevSlide = () => {
        // 取得前一張的索引編號，檢查是否為第一個編號
        // 是 => 跳到最後張
        // 否 => 跳到前一張
        setCurrentImgIndex((prevIndex) => (
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
        // slides.length - 1 => 陣列總長減一，就會是最後一張的index位置 
    }

    // 建立左右icon元件
    const Arrow = ({ direction, onClick }) => {
        return (
            // 擺放icon的區域
            <div style={{
                position: "absolute",
                top: "50%",
                cursor: "pointer",
                color: "#fff",
                [direction]: "20px", //將icon拆開，並且調整左右留白間距
            }}>

                {
                    direction === "left"
                        ? (
                            // 左按鈕
                            <FaArrowAltCircleLeft size={50} onClick={onClick} />
                        )
                        : (
                            // 右按鈕
                            <FaArrowAltCircleRight size={50} onClick={onClick} />
                        )
                }
            </div>
        )
    }

    return (
        <>
            {/* 滿版最外層 */}
            <div className='wrapper' style={{
                maxWidth: "100vw",
                height: "100vh",
                // width: "100%",
                // height: "300px",
                margin: "auto",
            }}>
                {/* 滿版背景輪播區 */}
                <div style={{
                    backgroundImage: `url(${slides[currentImgIndex].url})`,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    margin: "auto"
                }}>
                    {/* 文字區 */}
                    <h2 style={{ color: "red" }}>{slides[currentImgIndex].title}</h2>
                    {/* 上一張 */}
                    <Arrow direction="left" onClick={prevSlide} />
                    {/* 下一張 */}
                    <Arrow direction="right" onClick={nextSlide} />
                </div>
            </div>
        </>
    )
}

export default App