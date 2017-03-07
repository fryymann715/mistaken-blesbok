const express = require('express')
const router = express.Router()

import * as API from '../../database/index'

router.get( '/', ( request, response, next) => {
  response.json({ status: 'Whaddup.' })
})

router.post( '/books/add', API.Book.add )
router.get( '/books', API.Book.getAll )
router.get( '/books/:id', API.Book.getOne )

module.exports = router
