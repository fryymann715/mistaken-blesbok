import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import { NavBar } from './components'
import { WelcomePage, BookListPage, BookDetailsPage } from './pages/'


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
      <Route path="book-list/:page" component={ BookListPage }/>
      <Route path="book-details/:id" component={ BookDetailsPage }/>
      {/* <Route path="author-details/:id" component={ AuthorDetailsPage }/> */}
    </Route>
  </Router>, document.getElementById('app') )
