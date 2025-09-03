import React, { useRef, useState } from 'react'


const App = () => {
    // useState變數
    // const [inputValue, setInputValue] = useState('');


    // useRef變數給input(相當於document.querySelector)
    const inputRef = useRef(null);


    console.log('App 渲染了...');


    function btnHandler() {
        // console.log(inputValue)


        // 查看ref物件
        console.log(inputRef);


        // 查看ref值
        console.log(inputRef.current.value);


        // 查看ref型別
        console.log(inputRef.current.type);


        // 更改類型
        inputRef.current.type = "password";


        // 查看ref型別
        console.log(inputRef.current.type);


    }
    return (
        <div className='wrap'>
            <h1>useRef</h1><hr />


            {/* 使用useState */}
            {/* <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> */}


            {/* 使用useRef */}
            <input type="text" ref={inputRef} />
            <button onClick={btnHandler}>Click</button>
        </div>
    )
}


export default App