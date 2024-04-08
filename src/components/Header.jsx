import React, { useEffect, useState } from 'react'
import { NavLink, Link ,useNavigate} from 'react-router-dom'
import LoginIcon from '../assets/images/avatar-icon.png'
import { set } from 'firebase/database';

function Header({ isLoggedIn, onLogout }) {
  const navigate=useNavigate();

  const activeStyle={
    textDecoration: "underline",
    color: "#161616"
    
  }
  function handleLogout(){
    onLogout();
    navigate("/",{replace: true})
  }
  
 


  return (
    <nav className="navbar">
    <h1 className="site-logo"><Link to="/">#Vanlife</Link></h1>
     <ul className="main-menu">
         <li className="menu-item"><NavLink 
         to="/about"
        style={({isActive})=> isActive ? activeStyle : null}
        >About</NavLink></li>
         <li className="menu-item"><NavLink
          to="/vans"
          style={({isActive})=> isActive ? activeStyle : null}
          
          >Vans</NavLink></li>
         <li className="menu-item"><NavLink
          to="/host"
          style={({isActive})=> isActive ? activeStyle : null}
          >Host</NavLink></li>
          {
            isLoggedIn ? 
            <li className="menu-item"><button className='btn' onClick={handleLogout}>Logout</button></li>
          :
          <li className="menu-link"><Link to="/login">
            <img src={LoginIcon} alt="" className="login-icon" />
          </Link></li>
          }
     </ul>
    </nav>
  )
}

export default Header