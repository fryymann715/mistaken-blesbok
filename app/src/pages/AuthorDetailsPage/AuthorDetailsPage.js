import React from 'react'
import { AuthorDetails } from '../../components/'

import './AuthorDetailsPage.css'

const AuthorDetailsPage = props => {

  return (
    <div className="author-details page">
      <AuthorDetails id={ props.params.id }/>
      <h1>Things</h1>
    </div>
  )
}

export default AuthorDetailsPage
