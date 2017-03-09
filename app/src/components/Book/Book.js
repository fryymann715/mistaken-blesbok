import React from 'react'
import './Book.css'

const Book = props => {
  return (
    <div className="book">
      <div className="book-img-container">
        <img className="book-img" src={ props.book.img_url } />
      </div>
      <h5 className="book-title">{ props.book.title }</h5>
    </div>
  )
}

export default Book
