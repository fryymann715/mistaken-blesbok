import React from 'react'
import { AddBookForm } from '../../components/'

import './AddBookPage.css'

const AddBookPage = props => {

  return (
    <div className="add-book-page">
      <h1>ADD BOOK</h1>
      <AddBookForm />
    </div>
  )
}

export default AddBookPage
