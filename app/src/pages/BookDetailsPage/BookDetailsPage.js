import React from 'react'
import { BookDetails } from '../../components/'

import './BookDetailsPage.css'

const BookDetailsPage = props => {

  return (
    <div className="book-details-page page">

      <BookDetails id={ props.params.id } />

    </div>
  )
}

export default BookDetailsPage
