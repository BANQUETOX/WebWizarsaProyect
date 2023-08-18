const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("htmlWebWizards/teamLandingPage.html");
});
router.get("/products", (req, res) => {
  res.render("htmlWebWizards/teamProducts.html");
});

router.get("/group", (req, res) => {
  res.render("htmlWebWizards/teamGroup.html");
});

module.exports = router;
