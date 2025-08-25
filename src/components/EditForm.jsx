import { useState } from 'react'

// 方法1
const EditForm = ({ todo, editTodo }) => {

    const [content, setContent] = useState(todo.content);

    //建立一個函式處理新增的todo資料
    const editData = () => {
        let myInput = document.getElementById('myInput');
        myInput.focus(); //指定游標

        if (content.length === 0) {
            alert('沒有輸入待辦內容！請重新輸入');
        } else {
            editTodo(todo.id, content);
        }
    }

    //表單送出時
    const handleSubmit = (e) => {
        //取消送出預設行為
        e.preventDefault();
        editTodo(todo.id, content);
    }

    return (
        <form className='create-form' onSubmit={handleSubmit}>
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
            {/* <button type='button' onClick={editData}>完成</button> */}
            <button type='submit'>完成</button>
            {/* 要用submit按鈕的話，需搭配onSubmit={handleSubmit} */}
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
export default EditForm