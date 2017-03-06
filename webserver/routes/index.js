import app from '../../server'

const router = app.router()

router.get( '/', ( request, response, next ) => {
  response.send( 'Work?' )
})
