import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind( this )
    this.handleSubmit = this.handleSubmit.bind( this )
  }

  handleSubmit( event ) {
    event.preventDefault()
    let query = this.state.query
    if ( query.length < 1 ) {
      return
    }
    let searchURL = `search/${query}`
    this.setState({ query: '' })
    this.context.router.push( searchURL )
  }

  handleChange( event ) {
    this.setState({ query: event.target.value })
  }

  render() {
    return (
      <div className="searchbar">
        <form className="searchbar-form" onSubmit={ this.handleSubmit } >
          <input type="text" value={ this.state.query } onChange={ this.handleChange }/>
          <input type="submit" value="Search" />
        </form>

      </div>
    )
  }
}

SearchBar.contextTypes = {
  router: React.PropTypes.object.isRequired
}
