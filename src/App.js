import About from './components/About';
import Home from './components/Home';
import Vans from './components/Vans';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import './App.css';
import './components/style.css'

function App() {
  return (
    <BrowserRouter>
     <nav className="navbar">
   <h1 className="site-logo"><Link to="/">#Vanlife</Link></h1>
    <ul className="main-menu">
        <li className="menu-item"><Link to="/about">About</Link></li>
        <li className="menu-item"><Link to="/vans">Vans</Link></li>
    </ul>
   </nav>
    <Routes>
      <Route path='/' element={<Home/>} /> 
      <Route path='/about' element={<About/>} /> 
    </Routes>
    </BrowserRouter>
  );
} 

export default App;
