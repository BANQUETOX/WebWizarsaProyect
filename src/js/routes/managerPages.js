const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("htmlAplication/managerPages/managerAplicationJobs.html");
});
router.get("/jobStatus", (req, res) => {
  res.render("htmlAplication/managerPages/managerAplicationJobsStatus.html");
});

router.get("/companyProfile", (req, res) => {
  res.render("htmlAplication/managerPages/managerCompanyProfile.html");
});

router.get("/createJob", (req, res) => {
  res.render("htmlAplication/managerPages/managerCreateJob.html");
});

router.get("/profile", (req, res) => {
  res.render("htmlAplication/managerPages/managerProfile.html");
});

module.exports = router;
