import React, { createContext, useState } from 'react';

export const TodoContext = createContext()

const TodoContextProvider = ({children}) => {
    //State
    const [todos, setTodos] = useState ([
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
    ])
    const addTodo = todo => {
        setTodos([...todos,todo]);
    }
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const todoContextData = {
        todos,
        addTodo,
        deleteTodo,
    }
    return (
        <TodoContext.Provider value = {todoContextData}>{children}</TodoContext.Provider>
    )
}
export default TodoContextProvider