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
       this.setState({ book: book[0] })
     })
  }

  handleDelete() {

    //TODO: Add a modal for confirmation.
    let id = this.state.id
    let fetchURL = `/books/${id}`

    let request = new Request( fetchURL, {
      method: 'DELETE'
    })

    fetch( request )
      .then( () => {
        this.context.router.push( '/book-list' )
      })
  }

  render() {
    let book = this.state.book
    return (
      <div className="book-details-container">

        <div className="book-details-header">
          <h1>{ book.title }</h1>
          <div>
            <img src={ book.img_url } />
          </div>
        </div>

        <div className="book-details-body">

          <div className="book-details-description">
            <p>
              This is a summary of a book, once we support book descriptions they will be shown here.
            </p>
          </div>

          <div className="book-details-footer">
            <h6>Written By: { book.author }</h6>
            <h6>{ book.genre }</h6>
          </div>
        </div>

        <div className="book-details-delete-container">
          <button onClick={ () => this.handleDelete() }>DELETE</button>
        </div>


      </div>
    )
  }
}

BookDetails.contextTypes = {
  router: React.PropTypes.object.isRequired
}
