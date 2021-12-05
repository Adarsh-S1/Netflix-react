const express = require("express");
const router = express.Router();
const userHelpers = require("../helpers/userhelper");
const verifyLogin = (req, res, next) => {
  if (req.session.userLoggedIn) {
    next();
  } else {
    res.json("unauthenticated");
  }
};
// router.get("/verifylocallogin", (req, res) => {
//     if (req.session.userLoggedIn!==true) {
//       res.json("unauthenticated");
//     }
// })
router.post("/login", (req, res) => {
  userHelpers.userLogin(req.body).then((response) => {
    req.session.user = response;
    req.session.userLoggedIn = true;
    res.json(req.session.user);
  });
});
router.get("/prepayment", verifyLogin, (req, res) => {
  res.json(req.session.user);
});

router.post("/payment", verifyLogin, (req, res) => {
  userHelpers.generateOrder(req.body).then((response) => {
    res.json(response);
  });
});
router.post("/verifypayment", verifyLogin, (req, res) => {
  userHelpers
    .verifyPayment(req.body.response)
    .then((response) => {
      userHelpers.paymentSucccess(req.body.paymentId).then((response) => {
        console.log(response);
        res.json({ payment: "success",user:response });
      });
    })
    .catch((err) => {
      res.json({ payment: "failed" });
    });
});

router.get("/signout", (req, res) => {
  req.session.destroy();
  res.json("");
});
module.exports = router;
