import React, {useContext} from 'react';
import { TodoContext} from '../contexts/TodoContext';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm'
const Todos = () => {
    //load context
    const {todos } = useContext(TodoContext)
    return (
        <div className="todo-list">
            <TodoForm />
            <ul>
                {
                    todos.map(todo => (
                        <TodoItem todo={todo} key={todo.id}></TodoItem>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todos
