import React, { Component } from 'react'
import {Book} from '../Book/'

import './WelcomeBooks.css'

export default class WelcomeBooks extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch('/welcome')
     .then( data => data.json() )
     .then( r_books => r_books.data )
     .then( booksArray => {
       let books = booksArray.map( ( book, key ) => {
         return <Book key={ key } book={ book } />
       })
       this.setState({ books })
     })
  }

  render() {
    let books = this.state.books
    return (
      <div className="welcomebooks-container">
        { books }
      </div>
    )
  }
}
