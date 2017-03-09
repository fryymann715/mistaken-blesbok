import React, { Component } from 'react'


import './BookDetails.css'

export default class BookDetails extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      title: "",
      author: "",
      genre:"",
      id: "",
    }
  }

  componentDidMount() {
    fetch('/books')
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
      <div className="book-details-container">
        { books }
      </div>
    )
  }
}
