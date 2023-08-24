const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../../../db");
let newAccount;
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", async (req, res) => {
  const location = await db.Location.find();
  res.render("htmlAplication/userPages/userAplicationJobs.ejs", {
    locations: location,
  });
});

router.get("/aplications", async (req, res) => {
  const location = await db.Location.find();
  res.render("htmlAplication/userPages/userAplicationSatus.ejs", {
    locations: location,
  });
});
router.get("/profile", async (req, res) => {
  const location = await db.Location.find();
  const user = await db.User.find();
  res.render("htmlAplication/userPages/userProfile.ejs", {
    locations: location,
    user: user[0],
  });
});
router.post("/profile", async (req, res) => {
  const location = await db.Location.find();
  const user = await db.User.find();
  const newData = req.body;
  db.editUser(user[0], newData);
  res.render("htmlAplication/userPages/userProfile.ejs", {
    locations: location,
    user: user[0],
  });
});

router.get("/addInitialWorkExperience", (req, res) => {
  res.render("htmlAplication/userPages/userInitialWorkExperience.html");
});
router.post("/addInitialWorkExperience", (req, res) => {
  const workFormulary = req.body;
  console.log(workFormulary);
  let workExperience = {
    workNamePosition: workFormulary.workNamePosition,
    workDescription: workFormulary.workDescription,
    workCompanyName: workFormulary.workCompanyName,
    workUbication: workFormulary.workUbication,
    workSince: workFormulary.workSince,
    workUntil: workFormulary.workUntil,
  };
  newAccount.workExperience.push(workExperience);
  if (workFormulary.userLifeSheet) {
    newAccount.lifeSheet = workFormulary.userLifeSheet;
    newAccount.crimeSheet = workFormulary.userCrimeSheet;
    db.createUser(newAccount);
  }
});

router.get("/addWorkExperience", (req, res) => {
  res.render("htmlAplication/userPages/addWorkExperience.html");
});

router.post("/addWorkExperience", (req, res) => {
  const data = req.body;
  console.log(data);
});

router.get("/addInitialEducation", (req, res) => {
  res.render("htmlAplication/userPages/addInitialEducation.html");
  const sharedPages = require("./sharedPages");
  newAccount = sharedPages.newAccount;
});
router.post("/addInitialEducation", (req, res) => {
  newAccount.education = [];
  newAccount.workExperience = [];
  const education = req.body;
  newAccount.education.push(education);
});

router.get("/addEducation", (req, res) => {
  res.render("htmlAplication/userPages/addEducation.html");
});

router.post("/addEducation", (req, res) => {
  const data = req.body;
  console.log(data);
});

module.exports = router;
