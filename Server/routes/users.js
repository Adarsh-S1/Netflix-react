const express = require("express");
const router = express.Router();
const userHelpers = require("../helpers/userhelper");
router.get("/verifylogin", (req, res) => {
  if (req.session.userLoggedIn) {
    res.json(req.session.user);
  } else {
    res.json(undefined);
  }
});
router.post("/login", (req, res) => {
  userHelpers.userLogin(req.body).then((response) => {
    req.session.user = response;
    req.session.userLoggedIn = true;
    res.status(200).json(req.session.user);
  });
});

module.exports = router;
