const express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var path = require("path");
var session = require("express-session");
var db = require("./config/connection");
const app = express("express-session");
const user = require("./routes/users");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(
  session({
    secret: "NetflixKey",
    resave: true,
    cookie: { maxAge: 86400000 },
    saveUninitialized: true,
  })
);
app.use("/", user);
app.use(function (err, req, res, next) {
  if (err) {
    console.log("\x1b[31m", err.message, "--", res.statusCode);
  }
});

db.connect((err) => {
  if (err) console.log("connection error" + err);
  // else console.log("--------Database Connected--------");
});
app.listen(5000, () => {
  // console.log("backend server is running");
});
