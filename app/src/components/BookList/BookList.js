import React, { Component } from 'react'
import { Book } from '../Book/'

import './BookList.css'

export default class BookList extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      books: [],
      page: 0
    }
    this.getPage = this.getPage.bind( this )
  }

  componentDidMount() {
    this.getPage(0)
  }

  getPage( page ) {
    let fetchURL = this.props.fetchURL + page.toString()
    fetch( fetchURL )
      .then( response => response.json() )
      .then( json => json.data )
      .then( booksArray => {
        let books = booksArray.map( ( book, index ) => {
          return <Book key={ index } book={ book } />
        })
        this.setState({ books })
      })
  }

  handleNextPage() {
    let page = this.state.page
    page++
    this.setState({ page })
    this.getPage( page )
  }

  handlePrevPage() {
    let page = this.state.page
    if ( page <= 0 ) {
      page = 0
      this.setState({ page })
    } else {
      page--
      this.setState({ page })
      this.getPage( page )
    }
  }

  render() {
    let books = this.state.books
    return (
      <div>
        <div className="book-list-button-rack">
          <div onClick={ this.handlePrevPage.bind( this ) } className="book-list-button">Prev</div>
          <div onClick={ this.handleNextPage.bind( this )} className="book-list-button">Next</div>
        </div>
        <div className="book-list">
          { books }
        </div>
      </div>
    )
  }
}
