const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
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
  res.render("htmlAplication/adminPages/adminCompanyProfile.html");
});
//create job
router.get("/createJob", (req, res) => {
  res.render("htmlAplication/adminPages/adminCreateJob.html");
});

router.post("/createJob", (req, res) => {
  const data = req.body;
  console.log(data);
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
  console.log(data);
});
// profile
router.get("/profile", (req, res) => {
  res.render("htmlAplication/adminPages/adminProfile.html");
});
//create company
router.get("/createCompany", (req, res) => {
  res.render("htmlAplication/adminPages/createCompany.html");
});
router.post("/createCompany", (req, res) => {
  const sharedPages = require("./sharedPages");
  newAccount = sharedPages.newAccount;
  newCompany = req.body;
  newCompany.admin = newAccount;
  newCompany.members = [];
  newCompany.jobPositions = [];
  module.exports.newCompany = newCompany;
});

module.exports = router;
