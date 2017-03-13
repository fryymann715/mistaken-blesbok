import React from 'react'
import { AddBookForm } from '../../components/'

const AddBookPage = props => {
  return (
    <div className="add-book page">
      <h1 className="add-book title">Add a Book: </h1>
      <AddBookForm />
    </div>
  )
}

export default AddBookPage
