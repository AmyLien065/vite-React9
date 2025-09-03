import React, { useRef } from 'react'

const App0903 = () => {
    // 建立useRef變數
    const colorRef1 = useRef(null);
    const colorRef2 = useRef(null);
    const colorRef3 = useRef(null);

    // 最簡單的全寫出來，但就很麻煩
    // function inputFocus1() {   // 點框框1變色，其他無色
    //     colorRef1.current.style.backgroundColor = "yellow";
    //     colorRef2.current.style.backgroundColor = "";
    //     colorRef3.current.style.backgroundColor = "";
    // }

    // function inputFocus2() {   // 點框框2變色，其他無色
    //     colorRef2.current.style.backgroundColor = 'yellow';
    //     colorRef1.current.style.backgroundColor = "";
    //     colorRef3.current.style.backgroundColor = "";
    // }

    // function inputFocus3() {  // 點框框2變色，其他無色
    //     colorRef3.current.style.backgroundColor = 'yellow';
    //     colorRef1.current.style.backgroundColor = "";
    //     colorRef2.current.style.backgroundColor = "";
    // }


    // 老師說晚點研究
    // function inputFocus(no) {
    //     colorRef1.current.style.backgroundColor = "";
    //     colorRef2.current.style.backgroundColor = "";
    //     colorRef3.current.style.backgroundColor = "";

    //     if (no === 1) {
    //         colorRef1.current.style.backgroundColor = 'yellow';
    //     } else if (no === 2) {
    //         colorRef2.current.style.backgroundColor = 'yellow';
    //     } else if (no === 3) {
    //         colorRef3.current.style.backgroundColor = 'yellow';
    //     }
    // }

    return (
        <div>
            <h1>useRef-變色</h1>

            文字方塊1
            <input type="text" ref={colorRef1} onFocus={inputFocus1} />
            <br />
            文字方塊2
            <input type="text" ref={colorRef2} onFocus={inputFocus2} />
            <br />
            文字方塊3
            <input type="text" ref={colorRef3} onFocus={inputFocus3} />
            <br />
        </div>
    )
}

export default App0903