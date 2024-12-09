const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./src/routes/index");
const crypto = require("crypto");
const session = require("express-session");
const passport = require("passport");

app
  .use(express.json())
  .use(
    session({
      secret: crypto.randomBytes(64).toString("hex"),
      resave: false,
      saveUninitialized: false,
    })
  )
  //.use(passport.initialize())
  .use(passport.session())
  .use(cors())
  .use("/", router);

port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App listening on port " + port);
});
