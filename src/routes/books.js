const router = require("express").Router()
const booksController = require("../controllers/books")
const bookValidator = require("../utils/bookValidator")
const checkResult = require("../utils/validate")

router
  .get("/", booksController.getAll)
  .post("/", bookValidator.postRules(), checkResult, booksController.post)
  .get("/:book_id", booksController.get)
  .put("/:book_id", bookValidator.putRules(), checkResult, booksController.put)
  .delete("/:book_id", booksController.delete)


module.exports = router