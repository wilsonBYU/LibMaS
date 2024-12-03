const { ObjectId } = require("mongodb")
const Database = require("../models/dbClient")
const db = new Database()

const BOOKS = "books"

const booksController = {}

booksController.getAll = async (req, res) => {
  try {
    const books = await db.get("books")
    res.status(200).json(books)
  } catch (e) {
    console.error(e)
    res.status(500).json({error: "internal server error"})
  }
}

booksController.get = async (req, res) => {
  try {
    const book = await db.get(BOOKS, {_id: new ObjectId(req.params.book_id)})
    res.status(200).json(book)
  } catch(e) {
    console.error(e)
    res.status(500).json({error: "internal server error"})
  }
}

booksController.post = async (req, res) => {
  try {
    const result = await db.post(BOOKS, req.body)
    res.status(200).json(result)
  } catch(e) {
    console.error(e)
    res.status(500).json({error: "internal server error"})
  }
}

booksController.put = async (req, res) => {
  try {
    const result = await db.put(BOOKS, {_id: new ObjectId(req.params.book_id)}, {$set: req.body})
    res.status(204).json(result)
  } catch(e) {
    console.error(e)
    res.status(500).json({error: "internal server error"})
  }
}

booksController.delete = async (req, res) =>{
  try {
    const result = await db.delete(BOOKS, {_id: new ObjectId(req.params.book_id)})
    res.status(204).json(result)
  } catch(e) {
    console.error(e)
    res.status(500).json({error: "internal server error"})
  }
}

module.exports = booksController