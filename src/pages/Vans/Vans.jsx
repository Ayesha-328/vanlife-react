import React, { useState ,useEffect} from 'react'
import { Link ,useSearchParams} from 'react-router-dom'
import { getVans } from '../../api';

function Vans() {
  const [searchParams,setSearchPramas]=useSearchParams()
  const [vansArray,setVansArray]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null);
  
  const typeFilter=searchParams.get("type");
  // console.log(vansArray);
  
  useEffect(()=>{
    console.log("use effect ran")
    async function loadVans(){
      setLoading(true);
      try{
        const data=await getVans()
        setVansArray(data)
      }
      catch(err){
        setError(err)
      }
      finally{
        setLoading(false)
      }
      
    }
    loadVans()
  },[])
  
  
  const displayVansArray= typeFilter 
  ? vansArray.filter(van=>van.type===typeFilter)
  : vansArray;
  // console.log(displayVansArray);
  
  const vanElement= displayVansArray.map(van=>(
    
    <div key={van.id} className="van-container">
      <Link to={van.id} state={{search: searchParams.toString(), type : typeFilter}}>
      <img src={van.imageUrl} alt="van" className="van-img" />
    <div className="van-content">
      <h3 className="van-title">{van.name}</h3>
      <div className="van-price">
        <p className="price">${van.price}</p>
        <span>/day</span>
      </div> 
    </div>
    <button className={`btn van-type ${van.type} selected`}>{van.type}</button>
      </Link>
    
  </div>
  ))

  if(loading){
    return <h1 aria-live='polite'>Loading...</h1>
  }
  if(error){
    return <h1 aria-live='assertive'>There was an error : {error.message}</h1>
  }
  return (
    <>
    <section className="vans-section">
      <h1 className="heading">Explore our van options</h1>
      <div className="filters">
      <button onClick={()=>setSearchPramas({type:"simple"})}
      className={`filter-btn simple ${typeFilter==="simple" && "selected"}`}>Simple</button>
      <button onClick={()=>setSearchPramas({type:"luxury"})} className={`filter-btn luxury ${typeFilter==="luxury" && "selected"}`}>Luxury</button>
      <button onClick={()=>setSearchPramas({type:"rugged"})} className={`filter-btn rugged ${typeFilter==="rugged" && "selected"}`}>Rugged</button>
      {typeFilter ? 
      <button onClick={()=>setSearchPramas({})} className="filter-btn clear-filter">Clear filter</button>
      :null
      }
      
      </div>
      

      <div className="vans-container">
        
       {vanElement}
       

      </div>
    </section>
    </>
  )
}

export default Vans