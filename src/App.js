import About from './pages/About.jsx';
import React,{useState} from 'react';
import Home from './pages/Home.jsx';
import Vans from './pages/Vans/Vans.jsx';
import VanDetail from './pages/Vans/VanDetail.jsx';
import Layout from './components/Layout.jsx';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import './App.css';
import './components/style.css'
import "./server.js"
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostLayout from './components/HostLayout.jsx';
import HostVans from './pages/Host/HostVans.jsx';
import HostVanDetail from './pages/Host/HostVanDetail.jsx';
import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';
import NotFound from './components/NotFound.jsx';
import Login from './pages/Login.jsx';
import AuthRequired from './components/AuthRequired.jsx';

function App() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loggedin'));

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("loggedin", true);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedin');
    // window.location.replace('/'); // Redirect to home page
    setIsLoggedIn(false);
  };

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}  />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />

{/* Proted Routes */}
          <Route element={<AuthRequired isLoggedIn={isLoggedIn}/>}>
          <Route path='host' element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetail />} >
              <Route index element={<HostVanInfo/>}/>
              <Route path='pricing' element={<HostVanPricing/>}/>
              <Route path='photos' element={<HostVanPhotos/>}/>
            </Route>
          </Route >
          </Route>
          
          <Route  path='*' element={<NotFound/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
