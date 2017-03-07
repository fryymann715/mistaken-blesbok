import db from './db'

const addGenre = `INSERT INTO genre (name) VALUES ($1) RETURNING *`
const getOneGenre = `SELECT * FROM genre WHERE id=$1`
const getAllGenres = `SELECT * from genre`
const editGenre = `UPDATE genre SET name=$1 WHERE id=$2 RETURNING *`
const deleteGenre = `DELETE FROM genre where id=$1`

const Genre = {

  add: ( request, response, next ) => {

    let { name } = request.body
    console.log( name )
    db.query(addGenre, name)
      .then( genre => response.status(200).json({
        status: 'Success',
        data: genre,
        message: 'Inserted genre into database.'
      }))
      .catch( error => next( error ) )
  },

  getOne: ( request, response, next ) => {
    let { id } = request.params
    db.query(getOneGenre, id)
      .then( genre => response.status(200).json({
        status: 'Success',
        data: genre,
        message: 'Retrieved genre.'
      }))
      .catch( error => next( error ) )
  },

  getAll: ( request, response, next ) => {
    console.log( "Received request for all genres." )

    db.query(getAllGenres)
      .then( genres => response.status(200).json({
        status: 'Success',
        data: genres,
        message: 'Retrieved all genres.'
      }))
      .catch( error => next( error ) )
  },

  edit: ( request, response, next ) => {
    let { name, id } = request.body
    db.query(editGenre, [name, id])
      .then( genre => response.status(200).json({
        status: 'Success.',
        data: genre,
        message: 'Updated genre.'
      }))
      .catch( error => next( error ) )
  },
  delete: ( request, response, next ) => {
    let { id } = request.params
    db.query(deleteGenre, id)
    .then( response.status(200).json({
      status: 'Success',
      message: 'Deleted genre from database.'
    }))
    .catch( error => next( error ) )
  },
}

export default Genre
