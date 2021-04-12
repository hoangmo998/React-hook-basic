import React,{useEffect,useState} from "react";
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import queryString from 'query-string'
import './App.scss';

function App() {
    const [todoList,setTodoList]=useState([
        {id: 1,title: 'frontend'},
        {id: 2,title: 'backend'},
        {id: 3,title: 'fullstack'}
    ]);
    //Example count 
    const [count,setCount]=useState(0);
    const [postList,setPostList]=useState([]);
    const [pagination,setPagination]=useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1
    });
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
    })
    useEffect(() => {
        async function fetchPostList() {
           try {
               const paramsString = queryString.stringify(filters);
            const requestUrl=`http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
            const response=await fetch(requestUrl);
            const responseJSON=await response.json();
            console.log(responseJSON);
            const {data, pagination}=responseJSON;
            setPostList(data);
            setPagination(pagination)
           } catch (error) {
               console.log('failed to fetch post list', error.message)
           }
        }
        console.log('todo list effect')
        fetchPostList();
    },[filters]);

    function handlePageChange(newPage) {
        console.log('New page',newPage);
        setFilters({
            ...filters,
            _page: newPage,
        })
    }

    function handleTodoClick(todo) {
        console.log(todo);
        const index=todoList.findIndex(x => x.id===todo.id);
        if(index<0) return;
        const newTodoList=[...todoList];
        newTodoList.push(index,1);
        setTodoList(newTodoList)
    };

    function handleTodoFormSubmit(formValues) {
        console.log('Form submit',formValues);
        //add new todo to current list
        const newTodo={
            id: todoList.length+1,
            ...formValues,
        }
        const newTodoList=[...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList)
    }
    return (
        <div className="app" >
            <h1> React Hook PostList </h1>
            <p> You click {count}
                times </p>
            <button onClick={
                () => setCount(count+1)
            } > Click me </button>
            <h1> Welcome to React Hook </h1> 
            <ColorBox />
            <TodoList todos={todoList} onTodoClick={handleTodoClick}/> 
            <TodoForm onSubmit={handleTodoFormSubmit}/> 
            <PostList posts={postList}/> 
            <Pagination pagination={pagination} onPageChange={handlePageChange}/> 
        </div>
    );
}

export default App;