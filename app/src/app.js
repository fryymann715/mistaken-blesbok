import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { NavBar  } from './components/'

import {
  WelcomePage,
  BookListPage,
  BookDetailsPage,
  AuthorDetailsPage,
  AddBookPage,
  AddAuthorPage,
  AddGenrePage,
} from './pages/'



import './Layout.css'


const Layout = props => {
  return (
    <div className="layout-page">
      <NavBar />
      { props.children }
    </div>
  )
}

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path='/' component={ Layout }>
      <IndexRoute component={ WelcomePage }/>
      <Route path="author-details/:id" component={ AuthorDetailsPage }/>
      <Route path="book-list" component={ BookListPage }/>
      <Route path="add-book" component={ AddBookPage }/>
      <Route path="book-details/:id" component={ BookDetailsPage }/>
      {/* <Route path="author-details/:id" component={ AuthorDetailsPage }/> */}
      <Route path="add-author" component={ AddAuthorPage }/>
      <Route path="add-genre" component={ AddGenrePage }/>

    </Route>
  </Router>, document.getElementById('app') )
