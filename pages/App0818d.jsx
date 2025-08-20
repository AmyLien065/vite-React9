import React, { useState } from 'react'

//捕捉下拉式方塊內容
const App0818d = () => {
    const [subject, setSubject] = useState('');
    //建立下拉清單的項目
    const opList = ['HTML', 'CSS', 'JavaScript', 'React'];
    //建立下拉清單的內容
    const opListValue = ['html', 'css', 'js', 'react'];
    return (
        <div>
            <h2>捕捉下拉式方塊內容</h2><hr />
            <select
                name=""
                id=""
                value={subject}
                onChange={(e) => {
                    setSubject(e.target.value);
                    // console.log(subject);
                }}>
                {/* disabled=>失能 */}
                <option value="" disabled>請選擇</option>
                {/* 使用陣列 map 方法 */}
                {
                    opList.map((item, index) => {
                        return <option key={item} value={opListValue[index]}>{item}</option>
                    })
                }

                {/* <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JavaScript</option>
                <option value="react">React</option> */}

            </select>
        </div>
    )
}

export default App0818d