import React,{useEffect, useState} from 'react'
import { useParams ,Link, useLocation} from 'react-router-dom'
import {getVan} from "../../api"



function VanDetail() {
    const {id}=useParams();
    const location=useLocation();
    const queryParams=location.state.search
    const type=location.state.type;
    // console.log(location)
    // console.log(type)

    const [vanData,setVanData]=useState({})
    const [loading,setLoading] =useState(false)
    const [error , setError] =useState(null)
    // console.log(vanData)

    useEffect(()=>{
       async function laodVan(){
        setLoading(true);
        try{
          const data = await getVan(id)
          setVanData(data)
        }
        catch(err){
          setError(err)
        }
        finally{
          setLoading(false)
        }
       }
       laodVan()
    },[id])

    if(loading){
      return <h1>Loading...</h1>
    }

    if(error){
      return <h1>There was an error : {error.message}</h1>
    }
  return (
    <>
    <section className="van-detail-section">
        <div className="van-detail-container">
            <div className="back-link">
            &larr;   <Link to={`..?${queryParams && queryParams}`} relative='path'>Back to {type ? type : "all"} Vans</Link>
            </div>
        
    <img src={vanData.imageUrl} alt="" className="van-detail-img" />
    <button className="type-btn btn">{vanData.type}</button>
    <h3 className="heading">{vanData.name}</h3>
    <div className="van-price">
    <h3 className="price">${vanData.price}</h3>
    <span>/day</span>
        </div>
        <p className="desc">{vanData.description}</p>
    <button className="btn">Rent this van</button>
    
  </div>


</section>
    
    </>
  )
}

export default VanDetail