 import db from './db'

 const addAuthor = `INSERT INTO author (name) VALUES ($1) RETURNING *`
 const getOneAuthor = `SELECT * FROM author WHERE id=$1`
 const getAllAuthors = `SELECT * from author`
 const editAuthor = `UPDATE author SET name=$1 WHERE id=$2 RETURNING *`
 const deleteAuthor = `DELETE FROM author where id=$1`

const getByName = 'SELECT * FROM author WHERE name=$1'

const Author = {

    add: ( request, response, next ) => {

      let { name } = request.body
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
          data: authors,
          message: 'Retrieved all authors.'
        }))
        .catch( error => next( error ) )
    },

    edit: ( request, response, next ) => {
      let { id, name } = request.body
      db.query(editAuthor, [name, id])
        .then( author => response.status(200).json({
          status: 'Success.',
          data: author,
          message: 'Updated author.'
        }))
        .catch( error => next( error ) )
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

    noAPI: {
      getByName: name => {
        return db.query( getByName, name )
        .then( author => author )
      },
       add: name => {
        return db.query( addAuthor, name )
          .then( author => author )
       }
    },
 }
 export default Author
