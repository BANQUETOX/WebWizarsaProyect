const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../../../db");
let provinces = [];
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

let mainAdmin = router.get("/", (req, res) => {
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
  res.render("htmlAplication/pageAdmin/catalogueCantones.ejs", {
    locations: locations,
  });
});

router.post("/cantones", async (req, res) => {
  const locations = await db.Location.find();
  const province = locations.find((location) => {
    return location.province.name == req.body.province;
  });
  const provinceId = province.province.id;
  const provinceName = req.body.province;
  const cantonesIdList = req.body.cantonId;
  const cantonesNameList = req.body.cantonName;
  const cantonList = [];
  for (let i = 0; i < cantonesIdList.length; i++) {
    let cantonObj = {
      id: cantonesIdList[i],
      name: cantonesNameList[i],
    };
    cantonList.push(cantonObj);
  }
  db.addCantones(provinceId, provinceName, province.id, cantonList);

  res.render("htmlAplication/pageAdmin/catalogueCantones.ejs", {
    locations: locations,
  });
});

router.get("/districts", async (req, res) => {
  const locations = await db.Location.find();
  res.render("htmlAplication/pageAdmin/catalogueDistricts.ejs", {
    locations: locations,
  });
});

router.post("/districts", async (req, res) => {
  const locations = await db.Location.find();
  res.render("htmlAplication/pageAdmin/catalogueDistricts.ejs", {
    locations: locations,
  });
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
module.exports.mainAdmin = mainAdmin;
module.exports = router;
