import express from 'express'
const app = express()
const routes = require('./routes')

app.use( '/', routes )

app.use( ( request, response, next ) =>{
  let error = new Error( "We ain't got it." )
import bodyParser from 'body-parser'
const app = express()
const routes = require('./routes')

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: false }))

app.use( '/', routes )

app.use( ( request, response, next ) =>{
  let error = new Error( "We aint got it." )
  error.status = 404
  next( error )
})
app.use( ( request, response, next ) => {
  response.status( error.status || 500 )
    .json({
      status: 'Internal Server Error',
      message: 'Some bogus things are afoot at the Circle K'
    })
})

const port = process.env.PORT || 3456

app.listen( port, () => {
  console.log( `Starting webserver on port ${port}` )
})

export default app
