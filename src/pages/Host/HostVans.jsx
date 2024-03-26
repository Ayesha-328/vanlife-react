import React,{ useState,useEffect} from 'react'

import { Link } from 'react-router-dom';
import { getHostVans } from '../../api';


function HostVans() {
    const [hostvan,setHostVan]=useState([]);
    const [loading,setLoading] =useState(false)
    const [error , setError] =useState(null)
    // console.log(hostvan)

    useEffect(()=>{
        async function laodHostVans(){
         setLoading(true);
         try{
           const data = await getHostVans()
           setHostVan(data)
         }
         catch(err){
           setError(err)
         }
         finally{
           setLoading(false)
         }
        }
        laodHostVans()
     },[])

     if(loading){
        return <h1>Loading...</h1>
      }
  
      if(error){
        return <h1>There was an error : {error.message}</h1>
      }

    const hostVanElement=hostvan.map(van=>{
        return <Link key={van.id} to={van.id}>
        <div className="host-van-container" >
        <img src={van.imageUrl} alt="van" className="host-van-img" />
        <div className="host-van-detail">
            <h3 className="heading">{van.name}</h3>
            <p className="price">${van.price}/day</p>
        </div>
    </div>
        </Link>
    })

    return (
        <>
            <div className="site-wrapper">
                <div className="container">
                    <h1 className="heading">Your listed vans</h1>

                    <div className="host-vans-container">
                        {hostVanElement}
                    
                    
                    </div>

                    
                </div>


            </div>
        </>
    )
}

export default HostVans