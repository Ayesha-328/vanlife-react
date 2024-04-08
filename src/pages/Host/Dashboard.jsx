import React, { useEffect, useState } from 'react'
import { Outlet , Link} from 'react-router-dom'
import Star from "../../assets/images/star.png"


function Dashboard() {
  const [hostVan,setHostVan]=useState([])
  // console.log(hostVan)

  useEffect(()=>{
    // console.log("Use Effect ran")
    fetch("/api/host/vans")
    .then(res=>res.json())
    .then(data=>setHostVan(data.vans))
},[])

const hostVanElement=hostVan.map(van=>{
    return <Link key={van.id} to={van.id}>
      <div className="host-van-container wrapper">
        <div className="host-van-container">
        <img src={van.imageUrl} alt="van" className="host-van-img" />
    <div className="host-van-detail">
        <h3 className="heading">{van.name}</h3>
        <p className="price">${van.price}/day</p>
    </div>
      </div>
      <p className="details">Edit</p>
        </div>
    
   
    </Link>
})

  return (
    <>
     <div className="dashboard-container">
      <div className="main-container wrapper ">
        <div className="welcome-container">
          <h1 className="heading">Welcome!</h1>
          <p className="text">Income last <span className='imp'>30 days</span></p>
          <h2 className="main-heading">$2,260</h2>
        </div>
        <p className="details">Details</p>
      </div>
      <div className="review-main-container wrapper">
      <div className="review-container">
        <h3 className="heading">Review score</h3>
        <img src={Star} alt="" className="star" />
        <p className="rating">5.0 <span className='text'>/5</span></p>
      </div>
      <p className="details">Details</p>
      </div>
     

      <div className="vans-list-wrapper">
        <div className="vans-list-container wrapper">
        <h3 className="heading">Your listed vans</h3>
        <p className="details">View all</p>
        </div>
       
        
        <div className="vans-list">
        {hostVanElement}
        </div>
      </div>
     </div>
    </>
   
  )
}

export default Dashboard