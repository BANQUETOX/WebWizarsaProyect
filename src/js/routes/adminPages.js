const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../../../db");
let newAccount;
let newCompany;
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

//Main jobs page
router.get("/", (req, res) => {
  res.render("htmlAplication/adminPages/adminAplicationJobs.html");
});
// aplications Status
router.get("/aplications", (req, res) => {
  res.render("htmlAplication/adminPages/adminAplicationStatus.html");
});
//company profile
router.get("/companyProfile", (req, res) => {
  res.render("htmlAplication/adminPages/adminCompanyProfile.ejs", {});
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
router.get("/profile", (req, res) => {
  const Company = db.Company.find();
  res.render("htmlAplication/adminPages/adminProfile.ejs", {
    company: Company[0],
  });
});
//create company
router.get("/createCompany", (req, res) => {
  res.render("htmlAplication/adminPages/createCompany.html");
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
