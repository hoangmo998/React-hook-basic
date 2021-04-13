import React,{useState,useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
import {TodoContext} from '../contexts/TodoContext'
import {v4 as uuidv4} from 'uuid';
const TodoForm = () => {
    // Load context
    const {theme} = useContext(ThemeContext)
    const { isLightTheme, light, dark} = theme

    //Load context todos
    const {addTodo}=useContext(TodoContext);

    const [title, setTitle] = useState('')
    //Style
    // const style = isLightTheme ? light : dark
    const onTitleChange=event => {
        setTitle(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        addTodo({
            id: uuidv4(),
            title
        })
        setTitle('')
    }
    //style
    const style = isLightTheme ? light : dark

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" onChange={onTitleChange}
                value={title} required />
            <input type="submit" value="Add" style={style} />
        </form>
    )
}

export default TodoForm
