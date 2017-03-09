import React, { Component } from 'react'
import { Book } from '../Book/'

import './BookList.css'

export default class BookList extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      books: [],
      page: this.props.page
    }
  }

  componentDidMount() {
    fetch( '/books' )
      .then( data => data.json() )
      .then( result => {
        let booksArray = result.data
        let books = booksArray.map( ( book, index ) => {
          return <Book key={ index } book={ book } />
        })
        this.setState({ books })

      })
  }

  render() {
    console.log( this.state.page )
    let books = this.state.books
    return (
      <div className="book-list">
        { books }
      </div>
    )
  }


}
