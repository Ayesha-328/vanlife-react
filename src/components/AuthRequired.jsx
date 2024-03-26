import React from 'react'
import { Outlet, Navigate ,useLocation} from 'react-router-dom'

function AuthRequired() {
    const autheticated = localStorage.getItem("loggedin");
    const location=useLocation();
    

    if(!autheticated){
        return <Navigate to="/login" replace state={{message:"You must log in first",path:location.pathname}}/>
    }

    return <Outlet/>
   
}

export default AuthRequired