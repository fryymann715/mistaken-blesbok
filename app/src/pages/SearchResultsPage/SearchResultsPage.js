import React from 'react'
import { BookList } from '../../components/'


import './SearchResultsPage.css'

const SearchResultsPage = props => {

  let fetchURL = `/books/search/${props.params.query}/`
  console.log( fetchURL )
  return (
    <div className="search-results-page page">
      <BookList fetchURL={ fetchURL }/>
    </div>
  )
}

export default SearchResultsPage
