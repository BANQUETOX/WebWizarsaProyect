const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("htmlAplication/pageAdmin/catalogueProvices.html");
});

router.get("/cantones", (req, res) => {
  res.render("htmlAplication/pageAdmin/catalogueCantones.html");
});

router.get("/districts", (req, res) => {
  res.render("htmlAplication/pageAdmin/catalogueDistricts.html");
});

module.exports = router;
