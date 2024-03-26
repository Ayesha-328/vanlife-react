import React from 'react'
import AboutImage from '../assets/images/about-image.png'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
   <section className="about-section">
    <img src={AboutImage} alt="about" className="about-img" />
    <div className="about-content">
      <h2 className="main-heading">Don’t squeeze in a sedan when you could relax in a van.</h2>
      <p className="desc">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)</p>
<p className="desc">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

<div className="about-btn-container">
  <h3 className="heading">Your destination is waiting.</h3>
  <h3 className="heading">Your van is ready.</h3>
  <Link to="/vans" className="btn">Explore our vans</Link>
</div>
    </div>
   </section>



    </>
  )
}

export default About