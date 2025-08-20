import React from 'react'

const Todo = ({todo}) => {
    return (
        <div className='todo'>
            {/* <p>停車費</p> */}
            <p>{todo}</p>
        </div>
    )
}

export default Todo