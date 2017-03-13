import React from 'react'
import { Link } from 'react-router'

import './NavBar.css'

const NavBar = props => {

  return (
    <div className="navbar">
      <Link className="navbar-link" to="/">Home</Link>
      <Link className="navbar-link" to="/book-list">Book Listings</Link>
      <Link className="navbar-link" to="/add-book">Add Book</Link>
      <Link className="navbar-link" to="/add-author">Add Author</Link>
      <Link className="navbar-link" to="/add-genre">Add Genre</Link>
      <Link className="navbar-link" to="/about">About</Link>
    </div>
  )
}


export default NavBar
