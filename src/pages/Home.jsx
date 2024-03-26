import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
  

   <section className="home-section">
    <div className="home-container">
        <h2 className="main-heading">You got the travel plans, we got the travel vans.</h2>
        <p className="desc">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>

        <Link to="/vans" className="btn">Find your van</Link>
    </div>
   </section>

   
   </>
  )
}

export default Home