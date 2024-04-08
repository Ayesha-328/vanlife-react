import React from 'react'
import { Outlet, Navigate ,useLocation} from 'react-router-dom'

function AuthRequired() {
    const authenticated = localStorage.getItem("loggedin");
    const location=useLocation();
    

    if (!authenticated) {
        console.log("authrequired ran")
        return <Navigate to="/login" replace state={{ message: 'You must log in first', path: location.pathname }} />;
    }
    // else if (!authenticated && location.pathname.includes('/login')) {
    //     // Redirect to home page if on host page and logged out
    //     return <Navigate to="/" replace />;
    //   }
    return <Outlet/>
   
}

export default AuthRequired