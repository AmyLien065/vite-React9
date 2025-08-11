import React from 'react'
import "../css/app0811-weather"
import { useEffect } from 'react';
import axios from "axios";

const App = () => {
    // useEffect(() => {}) 渲染後，只呼叫一次json
    useEffect(() => {
        // 非同步取資料
        (async()=>{
            // 取得public中的json檔
            const data= await axios.get('./jason/');
            // 檢查是否連上json

        })


     })
    
}

export default App