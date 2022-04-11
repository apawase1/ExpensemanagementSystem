import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/login';
import SignUp from './Components/signup';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import UpdateUser from './Components/UpdateUserComponent';
import Mainpage from './Components/MainPage';


function App() {
  return (
  <Router>
    <div className="App">
     {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top"> */}
      {/* <div className="container">
        <Link className="navbar-brand" to={"/signin"}>Expense Management</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/signin"}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/signup"}>Sign up</Link>
            </li>
          </ul>
        </div>
      </div> */}
    {/* </nav> */}
      
    
      <div className='auth-wrapper '>
      <div className='auth-inner'> 
     
      {/* // <div className='auth-wrapper' > */}
        <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signin' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path={"/update/:id"} element={<UpdateUser/>}/>
        <Route path='/home/:id' element={<Mainpage/>}/>
        
        </Routes>

        </div> 
      </div>
    </div>
  </Router>
);
  
}

export default App;
