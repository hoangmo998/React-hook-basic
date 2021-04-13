import React, {useState} from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([
        {
            id:1,
            title: 'cong viec 1'
        },
        {
            id:2,
            title: 'cong viec 2'
        },
        {
            id:3,
            title: 'cong viec 3'
        }
    ]);

    return (
        <div className="todo-list">
            <ul>
                {
                    todos.map(todo => (
                        <li key ={todo.id}>
                            {todo.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo
