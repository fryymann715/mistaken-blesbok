import React from 'react'
import { BookDetails } from '../../components/'

const BookDetailsPage = props => {
  return (
    <div className="book-details page">
      <BookDetails id={ props.params.id } />
    </div>
  )
}

export default BookDetailsPage
