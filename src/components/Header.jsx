import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import LoginIcon from '../assets/images/avatar-icon.png'

function Header() {
  const activeStyle={
    textDecoration: "underline",
    color: "#161616"
    
  }

  function fakeLogOut() {
    localStorage.removeItem("loggedin")
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
          <li className="menu-link"><Link to="/login">
            <img src={LoginIcon} alt="" className="login-icon" />
          </Link></li>
          {/* <li className="menu-link"><button onClick={fakeLogOut}>X</button></li> */}
     </ul>
    </nav>
  )
}

export default Header