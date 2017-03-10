import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { NavBar } from './components/'
import {
  WelcomePage,
  BookListPage,
  BookDetailsPage,
  AuthorDetailsPage,
  AddBookPage
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
    </Route>
  </Router>, document.getElementById('app') )
