import db from './db'

const Book = {

  add: ( request, response, next ) => {

    let { title } = request.body
    console.log( title )
    db.query( `INSERT INTO book (title) VALUES ( '${title}' ) RETURNING *` )
      .then( book => response.status(200).json({
        status: 'Success',
        data: book,
        message: 'Inserted book into database.'
      }))
      .catch( error => next( error ) )
  },

  getOne: ( request, response, next ) => {
    //TODO: Account for author and genre, inserting a book could take 1 or all 3 fields.
    let { id } = request.params
    db.query( `SELECT * FROM book WHERE id=${id}` )
      .then( book => response.status( 200 ).json({
        status: 'Success',
        data: book,
        message: 'Retrieved book.'
      }))
      .catch( error => next( error ) )

  },

  getAll: ( request, response, next ) => {
    console.log( "Received request for all books." )

    db.query( `SELECT * from book` )
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
    db.query( `DELETE FROM book where id=${id}` )
    .then( response.status( 200 ).json({
      status: 'Success',
      message: 'Deleted book from database.'
    }))
    .catch( error => next( error ) )
  },
}

export default Book
