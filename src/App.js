import Navbar from './components/Navbar';
import Todos from './components/Todos';
import ThemeContextProvider from './contexts/ThemeContext';
import TodoContextProvider from './contexts/TodoContext'
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About'
function App() {
  return (
    <div className="App">
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
              <Route exact path='/' component={Home}/>
              <Route  exact path='/about' component={About}/>
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
