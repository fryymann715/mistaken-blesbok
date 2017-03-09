import React from 'react'
import { Link } from 'react-router'

import './NavBar.css'

const NavBar = props => {

  return (
    <div className="navbar">
      <Link className="navbar-link" to="/">Home</Link>
      <Link className="navbar-link" to="/book-list/0">Book Listings</Link>
      <Link className="navbar-link" to="/about">About</Link>
    </div>
  )
}


export default NavBar
