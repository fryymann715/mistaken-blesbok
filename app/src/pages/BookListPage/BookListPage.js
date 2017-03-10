import React from 'react'
import { BookList } from '../../components/'

import './BookListPage.css'

const BookListPage = props => {
  return (
    <div className="booklist-page">
      <h2 className="booklist-page-title">BOOK LIST</h2>

      <BookList />

    </div>
  )
}

export default BookListPage
