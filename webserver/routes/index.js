import express from 'express'
import app from '../app'
import path from 'path'
import * as API from '../../database/index'

const router = express.Router()

router.get( '/', ( request, response, next) => {
  response.sendFile( path.join( __dirname, '../index.html' ))
})

router.post( '/book', API.Book.add )
router.get( '/books', API.Book.getAll )
router.get( '/books/:id', API.Book.getOne )
// router.put( '/book/edit/:id', API.Book.edit )
router.delete( '/books/delete/:id', API.Book.delete )

router.post( '/author', API.Author.add )
router.get( '/authors', API.Author.getAll )
router.get( '/authors/:id', API.Author.getOne )
// router.put( '/author/edit/:id', API.Author.edit )
router.delete( '/authors/delete/:id', API.Author.delete )


module.exports = router
