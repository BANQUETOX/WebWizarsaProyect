const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../../../db");
let provinces = [];
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res) => {
  res.render("htmlAplication/pageAdmin/catalogueProvices.html");
});

router.post("/", (req, res) => {
  const provincesId = req.body.provinceId;
  const provincesName = req.body.provinceName;
  provinces = convertLocations(provincesId, provincesName);
  for (let i = 0; i < provinces.length; i++) {
    let province = {};
    province.province = provinces[i];
    db.createLocation(province);
  }
});

router.get("/cantones", async (req, res) => {
  const locations = await db.Location.find();
  res.render("htmlAplication/pageAdmin/catalogueCantones.html");
});

router.get("/districts", (req, res) => {
  res.render("htmlAplication/pageAdmin/catalogueDistricts.html");
});

function convertLocations(idList, namelist) {
  let locationsObjList = [];
  for (let i = 0; i < idList.length; i++) {
    const location = {};
    location.id = idList[i];
    location.name = namelist[i];
    locationsObjList.push(location);
  }
  return locationsObjList;
}

module.exports = router;
