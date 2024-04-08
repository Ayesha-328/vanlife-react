import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout({ isLoggedIn, onLogout }) {

  
  return (
    <div className="site-wrapper">
 <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
    <main>
    <Outlet /> 
    </main>
    
    <Footer />
    </div>
    
    
  )
}

export default Layout