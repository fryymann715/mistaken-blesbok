 import db from './db'

 const addAuthor = `INSERT INFO author (name) VALUES ($1) RETURNING *`
 const getOneAuthor = `SELECT * FROM author WHERE id=$1`
 const getAllAuthor = `SELECT * from author`
 const deleteAuthor = `DELETE FROM author where id=$1`

 const Author = {

    add: ( request, response, next ) => {

      let { title } = request.body
      console.log( title )
      db.query(addAuthor, name)
        .then( author => response.status(200).json({
          status: 'Success',
          data: author,
          message: 'Inserted author into database.'
        }))
        .catch( error => next( error ) )
      },

    getOne: ( request, response, next ) => {
      let { id } = request.params
      db.query(getOneAuthor, id)
        .then ( author => response.status(200).json({
          status: 'Success',
          data: author,
          message: 'Retrieved author.'
        }))
        .catch( error => next( error ) )
    },

    getAll: (request, response, next ) => {
      console.log( "Received request for all authors.")

      db.query(getAllAuthors)
        .then( authors => response.status(200).json({
          status: 'Success',
          data: authors
          message: 'Retrieved all authors.'
        }))
        .catch( error => next( error ) )
    },

    edit: ( request, response, next ) => {

    },

    delete: ( request, response, next ) => {
      let { id } = request.params
      db.query(deleteAuthor, id)
      .then( response.status(200).json({
      status: 'Success',
      message: 'Deleted author from database.'
      }))
      .catch( error => next( error ) )
    },
 }
 export defualt Author
