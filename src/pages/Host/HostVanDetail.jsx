import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams, Outlet } from 'react-router-dom'
import AboutImage from '../../assets/images/about-image.png'
import About from '../About'
import { getVan } from '../../api';

function HostVanDetail() {
  const {id} = useParams();
  const [hostVanDetails, setHostVanDetails] = useState({});
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);

  console.log(hostVanDetails)

  

  useEffect(() => {
    async function loadVanDetails(){
      setLoading(true);
      try{
        const data=await getVan(id)
        setHostVanDetails(data)
      }
      catch(err){
        setError(err)
      }
      finally{
        setLoading(false)
      }
      
    }
    loadVanDetails()
  }, [])

  if(loading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <h1>There was an error : {error.message}</h1>
  }


  const activeStyle = {
    textDecoration: "underline",
    color: "#161616"
  }
  return (
    <>
      <div className="container">

        <div className="back-link">
          &larr;   <Link to=".." relative="path">Back to all Vans</Link>
        </div>

        <div className="host-van-details">
          <div className="host-van-detail-container">
            <img src={hostVanDetails.imageUrl} alt="" className="host-van-detail-img" />
            <div className="host-van-detail-content">
              <button className="type-btn btn">{hostVanDetails.type}</button>
              <h3 className="heading">{hostVanDetails.name}</h3>
              <div className="van-price">
                <h3 className="price">${hostVanDetails.price}</h3>
                <span>/day</span>
              </div>
            </div>
          </div>

          <nav className="host-navbar">
            <ul className="main-menu">
              <li className="menu-item"><NavLink
                to="." 
                end
                style={({ isActive }) => isActive ? activeStyle : null}
              > Details</NavLink></li>
              <li className="menu-item"><NavLink
                to="pricing"
                style={({ isActive }) => isActive ? activeStyle : null}
              >Pricing</NavLink></li>
              <li className="menu-item"><NavLink
                to="photos"
                style={({ isActive }) => isActive ? activeStyle : null}
              >Photos</NavLink></li>

            </ul>
          </nav>

          <Outlet context={{hostVanDetails}} />
        </div>



      </div>
    </>
  )
}

export default HostVanDetail