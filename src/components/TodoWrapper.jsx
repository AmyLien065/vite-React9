import { useState } from 'react'
import CreateForm from './CreateForm'
import Todo from './Todo'

const TodoWrapper = () => {
    // 因為有n個to do，所以要用陣列存取
    // const [arrTodos, setArrTodos] = useState(['繳納停車費0820', '對5-6月統一發票']);
    // 陣列列容若有刪減時，索引值會異動，會導致索引位置不同
    // 為避免資料動、資料錯亂，將陣列改成陣列物件
    // key值用亂數來產生

    const [arrTodos, setArrTodos] = useState(
        [
            { content: '繳納停車費0820', id: Math.random() },
            { content: '對5-6月統一發票', id: Math.random() },
        ]
    )
    return (
        <div className='wrapper'>
            <h1>待辦事項</h1>
            {/* 方法1：傳送arrTodos陣列資料與setArrTodos方法到Todo元件 */}
            <CreateForm arrTodos={arrTodos} setArrTodos={setArrTodos} />


            {/* // 方法2：將setArrTodos方法包裝成一個方法（帶有參數）到Todo元件 */}

            {/* < CreateForm addTodo={(newContent) => {
                // 建立新的todo內容
                // 1.使用...其餘運算子來保留原本陣列內容
                // 2.再加上新的物件內容 
                setArrTodos([...arrTodos,{content:newContent,id:Math.random()}])
            }} /> 
            */}

            {
                arrTodos.map((todo) => {
                    return <Todo todo={todo.content} key={todo.id} />
                })
            }

        </div>
    )
}

export default TodoWrapper