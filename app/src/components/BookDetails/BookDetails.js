import React, { Component } from 'react'


import './BookDetails.css'

export default class BookDetails extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      id: this.props.id,
      book: {}
    }
  }

  componentDidMount() {
    let fetchURL = `/books/${this.state.id}`
    fetch( fetchURL )
     .then( response => response.json() )
     .then( json => json.data )
     .then( book => {
       console.log( book[0] )
       this.setState({ book: book[0] })
     })
  }

  render() {
    let book = this.state.book
    return (
      <div className="book-details-container">
        <h1>{ book.title }</h1>
        <h3>{ book.author }</h3>
        <h3>{ book.genre }</h3>
      </div>
    )
  }
}
