const { ObjectId } = require("mongodb")
const Database = require("../models/dbClient")
const db = new Database()

const { statusCodes } = require("../utils/index")

const USERS = "users"

const usersController = {}

usersController.getAll = async (req, res) => {
    /*
    #swagger.tags = ['Users']
    #swagger.description = 'Returns all users from the database'
    #swagger.responses[200] = { description: 'Users retrieved successfully' }
    #swagger.responses[500] = { description: 'Internal server error (databse or node)' }
  */
    try {
        const users = await db.get(USERS)
        res.status(statusCodes.OK).json(users)
    } catch (error) {
        console.error(e)
        res.status(500).json({error: "internal server error"})
    }
}

usersController.get = async (req, res) => {
    /*
      #swagger.tags = ['Users']
      #swagger.description = 'Returns a single user with the given ID'
      #swagger.responses[200] = { description: 'User with the given id retrieval successfully' }
      #swagger.responses[400] = { description: 'Invalid user Id format' }
      #swagger.responses[404] = { description: 'User with the given id does not excist' }
      #swagger.responses[500] = { description: 'Internal server error (databse or node)' }
    */
    const id = req.params.user_id

    try {
        const user = await db.get(BOOKS, {_id: id})
        if (!user) {
            res.status(statusCodes.NotFound).json({error: `User with Id:${id} does not exists`})
        }
        res.status(statusCodes.OK).json(user)
    } catch(e) {
        console.error(e)
        res.status(statusCodes.InternalServerError).json({error: "internal server error"})
    }
  }

// usersController.post = async (req, res) => {
//     const newUser = {
//         googleId: profile.id,
//         firstName: profile.name.givenName,
//         lastName: profile.name.familyName,
//         displayName: profile.displayName,
//         email:
//         phone:
//         tookenId:
//     }
//     try {
//       const result = await db.post(USERS, newUser)
//       res.status(statusCodes.Created).json(result)
//     } catch(e) {
//       console.error(e)
//       res.status(statusCodes.InternalServerError).json({error: "internal server error"})
//     }
// }

usersController.put = async (req, res) => {
    try {
        const result = await db.put(USERS, {_id: new ObjectId(req.params.id)}, {$set: req.body})
        res.status(statusCodes.NoContent).json(result)
    } catch(e) {
        console.error(e)
        res.status(statusCodes.InternalServerError).json({error: "internal server error"})
    }
}

usersController.delete = async (req, res) =>{
    /*
      #swagger.tags = ['Users']
      #swagger.description = 'Delete a single suer with the given ID'
      #swagger.responses[204] = { description: 'User with the given id deleted successfully' }
      #swagger.responses[400] = { description: 'Invalid user Id format' }
      #swagger.responses[404] = { description: 'User with the given id does not excist' }
      #swagger.responses[500] = { description: 'Internal server error (databse or node)' }
    */
    try {
      await db.delete(USERS, {_id: new ObjectId(req.params.id)})
      res.status(statusCodes.NoContent)
    } catch(e) {
      console.error(e)
      res.status(statusCodes.InternalServerError).json({error: "internal server error"})
    }
}


module.exports = usersController