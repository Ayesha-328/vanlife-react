import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'


function HostLayout() {
  const activeStyle={
    textDecoration: "underline",
    color:"#161616"
  }
  return (
    <>
    <nav className="host-navbar">
        <ul className="main-menu">
           <li className="menu-item"><NavLink 
           to="."
           end
           style={({isActive})=> isActive ? activeStyle:null}
           > Dashboard</NavLink></li>
            <li className="menu-item"><NavLink
             to="income"
             style={({isActive})=> isActive ? activeStyle:null}
             >Income</NavLink></li>
            <li className="menu-item"><NavLink
             to="vans"
             style={({isActive})=> isActive ? activeStyle:null}
             >Vans</NavLink></li>
            <li className="menu-item"><NavLink
             to="reviews"
             style={({isActive})=> isActive ? activeStyle:null}
             >Reviews</NavLink></li>
        </ul> 
    </nav>
    <Outlet />
    </>

  )
}

export default HostLayout