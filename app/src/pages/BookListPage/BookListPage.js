import React from 'react'
import { BookList } from '../../components/'

const BookListPage = props => {
  let fetchURL = `/books/page/`
  return (
    <div className="booklist-page page">
      <BookList fetchURL={ fetchURL }/>
    </div>
  )
}

export default BookListPage
