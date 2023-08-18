const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
let newAccount;
router.get("/", (req, res) => {
  res.render("htmlAplication/landingPage/aplicationLandingPage.html");
});
router.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
});

router.get("/welcome", (req, res) => {
  res.render("htmlAplication/landingPage/welcome.html");
});

router.get("/changePassword", (req, res) => {
  res.render("htmlAplication/sharedPages/changePassword.html");
});
router.post("/changePassword", (req, res) => {
  const data = req.body;
  console.log(data);
});

router.get("/forgetPassword", (req, res) => {
  res.render("htmlAplication/sharedPages/forgetPassword.html");
});
router.post("/forgetPassword", (req, res) => {
  const data = req.body;
  console.log(data);
});

router.get("/newRegister", (req, res) => {
  res.render("htmlAplication/sharedPages/newRegister.html");
});
router.post("/newRegister", (req, res) => {
  const userType = req.body.userType;
  newAccount.userRole = userType;
  module.exports.newAccount = newAccount;
});

router.get("/registerNewAccount", (req, res) => {
  res.render("htmlAplication/sharedPages/registerNewAccount.html");
});

router.post("/registerNewAccount", (req, res) => {
  newAccount = req.body;
  console.log(newAccount);
});

module.exports = router;
