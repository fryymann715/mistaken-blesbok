const express = require('express')
const app = express()







app.get( '/', ( request, response, next) =>{
  response.json({ status: 'Whaddup.' })
})







const port = process.env.PORT || 3456
app.listen( port, () => {
  console.log( `Starting webserver on port ${port}` )
})

module.exports = app
