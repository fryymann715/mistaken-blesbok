import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  return (
    <div>
      <h1>APP</h1>
    </div>
  )
}
console.log( document.getElementById('app') )

ReactDOM.render( <App />, document.getElementById('app') )
