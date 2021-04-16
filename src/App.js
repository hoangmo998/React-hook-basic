import Navbar from './components/Navbar';
import Todos from './components/Todos';
import ThemeContextProvider from './contexts/ThemeContext';
import TodoContextProvider from './contexts/TodoContext'
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';
import React,{useState, useReducer} from 'react';
import Form from './components/Form';
import People from './components/People';
import NewestPerson from './components/NewestPerson';
import PeopleContext from './contexts/peopleContext';
import peopleReducer from './contexts/peopleReducer'
function App() {
  const [people,setPeople]=useState([
    {
      firstName: 'Hoang',
      lastName: 'Mo'
    },
    {
      firstName: 'Nguyen',
      lastName: 'momo'
    },
  ])
  const addPerson= (person) => {
    setPeople([...people, person])
  }
  return (
    <div className="App">
       <div className="container">
      <div className="row">        
        <Form addPerson={addPerson}></Form>
        <People people={people}></People>
        <NewestPerson newestPerson= {people[people.length -1]} peopleCount = {people.length}></NewestPerson>
      </div>
    </div>
    <hr />
      <Router>
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">Home Router</Link>
            </li>
            <li>
              <Link to="/users/mo/xinhgai" >Users Router</Link>
            </li>
            <li>
              <Link to={
                {
                  pathname: "/about",
                  state: {
                    from: 'root'
                  }
                }
              }>About</Link>
            </li>
          </ul>
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/users/:firstname/:lastname' component={Users} />
            </Switch>
          </div>
        </header>
      </Router>

      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
        </AuthContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
