import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import logger from 'morgan'

const app = express()
const routes = require('./routes')

app.use( logger( 'dev' ))
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: false }))
app.use( express.static( path.join( __dirname, 'public' )))

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
