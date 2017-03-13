import React from 'react'
import { AuthorDetails } from '../../components/'

const AuthorDetailsPage = props => {
  return (
    <div className="author-details page">
      <AuthorDetails id={ props.params.id }/>
    </div>
  )
}

export default AuthorDetailsPage
