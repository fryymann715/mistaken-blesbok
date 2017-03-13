import React from 'react'
import { BookList } from '../../components/'

import './BookListPage.css'

const BookListPage = props => {

  let fetchURL = `/books/page/`
  return (
    <div className="booklist-page">
      <h2 className="booklist-page-title">BOOK LIST</h2>

      <BookList fetchURL={ fetchURL }/>

    </div>
  )
}

export default BookListPage
