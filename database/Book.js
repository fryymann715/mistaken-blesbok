import db from './db'
import * as API from './index'

const addBook = `INSERT INTO book (title) VALUES ($1) RETURNING *`
const getOneBook =
`SELECT book.*, author.name AS author, genre.name AS genre FROM book
JOIN book_author ON book.id=book_author.book_id
JOIN author ON book_author.author_id=author.id
JOIN book_genre ON book.id=book_genre.book_id
JOIN genre ON book_genre.genre_id=genre.id
WHERE book.id = $1;`
const getAllBooks = `SELECT * from book LIMIT 10 OFFSET $1`

const searchForBooks =
`SELECT DISTINCT(book.*) FROM book
JOIN book_author ON book.id=book_author.book_id
JOIN author ON book_author.author_id=author.id
JOIN book_genre ON book.id=book_genre.book_id
JOIN genre ON book_genre.genre_id=genre_id
WHERE LOWER(book.title) LIKE '%{query}%'
OR LOWER(author.name) LIKE '%{query}%'
OR lower(genre.name) LIKE '%{query}%'
ORDER BY (book.title) ASC`

const getWelcomeBooks = `SELECT * from book LIMIT 4`
const deleteBook = `DELETE FROM book where id=$1`

const getWelcomeBooks = `SELECT * from book LIMIT 4`
const PAGE_SIZE = 10

const Book = {

  add: ( request, response, next ) => {
    let { title, author, genre } = request.body
    let author_id, genre_id, book_id, book

    Promise.all([
      API.Author.noAPI.getByName( author ),
      API.Genre.noAPI.getByName( genre )
    ])
      .then( result =>  {
        let authorResult = result[0][0]
        let genreResult = result[1][0]

        if ( !authorResult ) {
          Promise.resolve( API.Author.noAPI.add( author ) )
            .then( authorObj => {
              author_id = authorObj[0].id
            } )
            .catch( error => next( error ) )
        } else {
          author_id = authorResult.id
        }
        if ( !genreResult ) {
          Promise.resolve( API.Genre.noAPI.add( genre ) )
            .then( genreObj => {
              genre_id = genreObj[0].id
            } )
            .catch( error => next( error ) )
        } else {
          genre_id = genreResult.id
        }

        db.query( addBook, title )
          .then( result => {
            book = result[0]
            book_id = book.id

            db.tx(t => {
              return t.batch([
                t.none("insert into book_author( book_id, author_id ) values( $1, $2 )", [book_id, author_id] ),
                t.none("insert into book_genre( book_id, genre_id ) values( $1, $2 )", [book_id, genre_id] )
              ])
            })
            .then( response.status(200).json({
              status: 'Success',
              data: book,
              message: 'Added the book to the database.'
            }) )
          })
      })
  },

  getOne: ( request, response, next ) => {
    let { id } = request.params
    db.query( getOneBook, id )
      .then( book => {
        response.status( 200 ).json({
          status: 'Success',
          data: book,
          message: 'Retrieved book.'
        })
      })
      .catch( error => next( error ) )

  },

  getWelcomeBooks: ( request, response, next ) => {
    db.query( getWelcomeBooks )
      .then( books => response.status( 200 ).json({
        status: 'Success',
        data: books,
        message: 'Retrieved all books.'
      }))
      .catch( error => next( error ) )
  },

  getAll: ( request, response, next ) => {
    let { page } = request.params
    page = parseInt(page)
    let offset = page * PAGE_SIZE
    db.query( getAllBooks, offset )
      .then( books => response.status( 200 ).json({
        status: 'Success',
        data: books,
        message: 'Retrieved all books.'
      }))
      .catch( error => next( error ) )
  },

  edit: ( request, response, next ) => {

  },

  delete: ( request, response, next ) => {
    let { id } = request.params
    db.query(deleteBook, id)
    .then( response.status( 200 ).json({
      status: 'Success',
      message: 'Deleted book from database.'
    }))
    .catch( error => next( error ) )
  },

  search: ( request, response, next ) => {
   let { query } = request.params
   let searchQuery = searchForBooks.replace( /({query})/g, query)

   db.query( searchQuery )
   .then( books => response.status(200).json({
     status: 'Success',
     data: books,
     message: "Retrieved search results."
   }))
   .catch( error => next(error) )
  },
}

export default Book
