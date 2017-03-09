import express from 'express'
import app from '../app'
import path from 'path'
import * as API from '../../database/index'

const router = express.Router()

router.get( '/', ( request, response, next) => {
  response.sendFile( path.join( __dirname, '../index.html' ))
})

router.get( '/welcome', API.Book.getWelcomeBooks )

router.post( '/books', API.Book.add )
router.get( '/books', API.Book.getAll )
router.get( '/books/:id', API.Book.getOne )
// router.put( '/books/:id', API.Book.edit )
router.delete( '/books/:id', API.Book.delete )


router.post( '/authors', API.Author.add )
router.get( '/authors', API.Author.getAll )
router.get( '/authors/:id', API.Author.getOne )
router.put( '/authors', API.Author.edit )
router.delete( '/authors/:id', API.Author.delete )

router.post( '/genres', API.Genre.add )
router.get( '/genres', API.Genre.getAll )
router.get( '/genres/:id', API.Genre.getOne )
router.put( '/genres', API.Genre.edit )
router.delete( '/genres/:id', API.Genre.delete )

module.exports = router
