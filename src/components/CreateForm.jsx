import { useState } from 'react'

// 方法1
const CreateForm = ({ arrTodos, setArrTodos }) => {

    const [content, setContent] = useState('');
    //建立一個函式處理新增的todo資料
    const addData = () => {
        // console.log(content.length)
        let myInput = document.getElementById('myInput');
        myInput.focus(); //指定游標

        if (content.length === 0) {
            alert('沒有輸入待辦內容！請重新輸入');
        } else {
            setArrTodos([...arrTodos, { content: content, id: Math.random() }]);
            setContent('');
        }
    }

    return (
        <form className='create-form'>
            <input
                id="myInput"
                type="text"
                placeholder='輸入待辦事項'
                value={content}
                onChange={(e) => {
                    //去除資料前後的空白=>trim()
                    setContent(e.target.value.trim())
                }}
            />
            <button type='button' onClick={addData}>加入</button>
        </form>
    )

    // 方法2
    // const CreateForm = ({ addTodo }) => {
    //     // console.log(addTodo)
    //     const [content, setContent] = useState('');

    //     return (
    //         <form className='create-form'>
    //             <input
    //                 id='myInput'
    //                 type="text"
    //                 placeholder='輸入待辦事項'
    //                 value={content}
    //                 onChange={(e) => { setContent(e.target.value.trim()) }}
    //             />

    //             <button type='button' onClick={() => {
    //                 addTodo(content);
    //                 setContent(''); //內容輸入後，預設值清空
    //                 let myInput = document.getElementById('myInput');
    //                 myInput.focus(); //指定游標位置
    //             }}>加入</button>
    //         </form >
    //     )
    // }
}
export default CreateForm