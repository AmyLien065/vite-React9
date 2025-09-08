import React, { useEffect, useState } from 'react'


const App = () => {
    const [data, setData] = useState(null);


    // https://www.pexels.com/zh-tw/
    const auth = "自己的AccessKey";
    const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";


    // 取得pexels圖庫的api
    const search = async (url) => {
        const dataFetch = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: auth,
            },
        });
        const photosData = await dataFetch.json();
        setData(photosData.photos);
        console.log(photosData);
    };


    useEffect(() => {
        search(intialURL);
    }, [])




    return (
        <div>
            {/* unsplash api */}


            {/* pexels api */}


        </div>
    )
}


export default App

