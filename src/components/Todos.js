import React, {useContext} from 'react';
import { TodoContext} from '../contexts/TodoContext';
import {AuthContext} from '../contexts/AuthContext';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
const Todos = () => {
    //load context todos
    const { todos } = useContext(TodoContext)
    //load context auth
    const { isAuthenticated} = useContext(AuthContext)
    return (
        <div className="todo-list">
            <TodoForm />
            {isAuthenticated ? (
                 <ul>
                 {
                     todos.map(todo => (
                         <TodoItem todo={todo} key={todo.id}></TodoItem>
                     ))
                 }
             </ul>
            ) : <p style= {{textAlign: 'center'}}>Đăng nhập vào đi con gà này pls !!!!!!!</p>}
           
        </div>
    )
}

export default Todos
