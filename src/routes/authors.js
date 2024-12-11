const router = require("express").Router();
const authorsController = require("../controllers/authors");
const auth = require("../utils/auth");
const authorValidator = require("../utils/authorValidator");
const checkResult = require("../utils/validate");

router
  .get("/", authorsController.getAll)
  .get("/:author_id", authorsController.get)
  .post(
    "/",
    auth.isAuthenticated,
    authorValidator.postRules(),
    checkResult,
    authorsController.post
  )
  .put(
    "/:author_id",
    auth.isAuthenticated,
    authorValidator.putRules(),
    checkResult,
    authorsController.put
  )
  .delete("/:author_id", auth.isAuthenticated, authorsController.delete);

module.exports = router;
