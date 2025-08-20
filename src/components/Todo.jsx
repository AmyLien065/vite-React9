import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";


const Todo = ({ todo, delTodo, toggleCompleted }) => {
    return (
        // 使用字串字面值＋三元運算子的方法，控制是否套用css規則
        <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
            {/* <p>停車費</p> */}
            <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
            <div>
                <MdEdit style={{ cursor: "pointer", marginRight: "5px" }} />
                <MdDelete
                    style={{ cursor: "pointer" }}
                    onClick={() => { delTodo(todo.id) }}
                />
            </div>
        </div>
    )
}

export default Todo