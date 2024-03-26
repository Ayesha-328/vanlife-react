import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container not-found-container">
        <h4 className="main-heading">Sorry, The page you are looking for was not found :(</h4>
        <Link to="/" className="btn">Return to home</Link>
    </div>
  )
}

export default NotFound