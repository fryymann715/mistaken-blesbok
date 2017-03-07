import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import HomePage from './components/homePage'

const App = () => {

  return (
    <div className="app">
      <HomePage />
    </div>
  )
}

ReactDOM.render( <App />, document.getElementById('app') )
