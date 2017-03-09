import React from 'react'
import { Link } from 'react-router'
import './Book.css'

const Book = props => {
  let linkURL = `/book-details/${props.book.id}`
  return (
    <Link className="book" to={ linkURL }>
      <div className="book-img-container">
        <img className="book-img" src={ props.book.img_url } />
      </div>
      <h5 className="book-title">{ props.book.title }</h5>
    </Link>
  )
}

export default Book
