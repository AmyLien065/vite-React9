import React, { useState } from 'react'

function App0819c() {
    const [curImg, setCurImg] = useState(0);
    // const arrPhotos = [
    //     {
    //         imgName: "./image/hinada-p1.jpeg"
    //     },
    //     {
    //         imgName: "./image/hinada-p2.jpeg"
    //     },
    //     {
    //         imgName: "./image/hinada-p3.jpeg"
    //     },
    //     {
    //         imgName: "./image/hinada-p4.jpeg"
    //     }
    // ]

    const arrPhotos = [
        "./images/hinada-p1.jpeg",
        "./images/hinada-p2.jpeg",
        "./images/hinada-p3.jpeg",
        "./images/hinada-p4.jpeg"
    ]

    return (
        <div>
            <h1>小圖換大圖</h1>
            <div>
                <div>
                    
                    {
                        arrPhotos.map((photo, index) => {
                            return (
                                <img
                                    key={index}
                                    src={photo}
                                    alt=''
                                    width={120}
                                    height={80}
                                    style={{ cursor: "pointer" }}

                                    //縮圖時，滑鼠左鍵按一次：
                                    onClick={() => {
                                        //更新最新縮圖的索引值
                                        setCurImg(index);
                                        let showPic = document.querySelector('#showPic');
                                        showPic.style.display = "block";
                                    }}
                                // //滑鼠碰到時
                                // onMouseOver={() => {
                                //     setCurImg(index)
                                // }}
                                // // 若離開縮圖要還原成預設圖，則將索引位置設定預設圖的值即可
                                // onMouseOut={()=>{
                                //     setCurImg(2)
                                // }}
                                />
                            )
                        })
                    }
                </div>
                {/* <img src="./images/hinada-p1.jpge" alt="" width={420} height={280} /> */}
                {/* 預設是不顯示大圖，當縮圖被左鍵一下時，才會顯示 */}
                <img 
                id='showPic' 
                src={arrPhotos[curImg]} 
                alt="" 
                width={420} 
                height={280} 
                style={{display:"none"}}
                />
            </div>
        </div>
    )
}

export default App0819c