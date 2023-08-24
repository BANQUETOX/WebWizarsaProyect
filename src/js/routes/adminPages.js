const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../../../db");
let newAccount;
let newCompany;
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

//Main jobs page
router.get("/", async (req, res) => {
  const location = await db.Location.find();
  res.render("htmlAplication/adminPages/adminAplicationJobs.ejs", {
    locations: location,
  });
});
// aplications Status
router.get("/aplications", async (req, res) => {
  const location = await db.Location.find();
  res.render("htmlAplication/adminPages/adminAplicationStatus.ejs", {
    locations: location,
  });
});
//company profile
router.get("/companyProfile", async (req, res) => {
  const company = await db.Company.find();
  res.render("htmlAplication/adminPages/adminCompanyProfile.ejs", {
    company: company[0],
  });
});
router.post("/companyProfile", async (req, res) => {
  const company = await db.Company.find();
  const newData = req.body;
  await db.editCompany(company[0], newData);
  res.render("htmlAplication/adminPages/adminCompanyProfile.ejs", {
    company: company[0],
  });
});
//create job
router.get("/createJob", (req, res) => {
  res.render("htmlAplication/adminPages/adminCreateJob.html");
});

router.post("/createJob", (req, res) => {
  const data = req.body;
});

//invite members
router.get("/inviteMembers", (req, res) => {
  res.render("htmlAplication/adminPages/adminInviteMembers.html");
});
router.post("/inviteMembers", (req, res) => {
  invite = req.body;
});

router.get("/initialInviteMembers", (req, res) => {
  res.render("htmlAplication/adminPages/adminInitialInviteMembers.html");
});

router.post("/initialInviteMembers", (req, res) => {
  const data = req.body;
});
// profile
router.get("/profile", async (req, res) => {
  const location = await db.Location.find();
  const company = await db.Company.find();
  res.render("htmlAplication/adminPages/adminProfile.ejs", {
    locations: location,
    company: company[0],
  });
});

router.post("/profile", async (req, res) => {
  const location = await db.Location.find();
  const newData = req.body;
  const company = await db.Company.find();
  await db.editAdmin(company[0], newData);
  res.render("htmlAplication/adminPages/adminProfile.ejs", {
    locations: location,
    company: company[0],
  });
});

//create company
router.get("/createCompany", async (req, res) => {
  const location = await db.Location.find();
  res.render("htmlAplication/adminPages/createCompany.ejs", {
    locations: location,
  });
});
router.post("/createCompany", (req, res) => {
  const sharedPages = require("./sharedPages");
  newAccount = sharedPages.newAccount;
  newAccount.isActive = true;
  newCompany = {
    image: req.body.companyImage,
    name: req.body.companyName,
    id: req.body.companyId,
    phone: req.body.companyPhone,
    facebook: req.body.companyFacebook,
    instagram: req.body.companyInstagram,
    twitter: req.body.companyTwitter,
    province: req.body.companyProvince,
    canton: req.body.companyCanton,
    district: req.body.companyDistrict,
    address: req.body.companyAddress,
    admin: {},
    members: [],
    jobPositions: [],
  };
  newCompany.admin = newAccount;
  db.createCompany(newCompany);
});

module.exports = router;
