import React, { Component } from 'react'

export default class AuthorDetails extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      id: this.props.id,
      author: {},
      error: null
    }
  }

  componentDidMount() {
    let fetchString = `/authors/${this.state.id}`
    fetch( fetchString )
     .then( response => response.json() )
     .then( json => json.data )
     .then( author => {
       this.setState({ author: author[0] })
     })
     .catch( error => {
       this.setState({ error: 'No Author with that ID number.' })
     })
  }

  render() {
    let author = this.state.author
    let errorMessage = !this.state.message
      ? <span>{this.state.error}</span>
      : null
    return (
      <div>
        <h2>{ author.name }</h2>

        { errorMessage }
      </div>
    )
  }
}
