const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("htmlAplication/recruiterPages/recruiterAplicationJobs.html");
});
router.get("/jobStatus", (req, res) => {
  res.render(
    "htmlAplication/recruiterPages/recruiterAplicationJobsStatus.html"
  );
});

router.get("/companyProfile", (req, res) => {
  res.render("htmlAplication/recruiterPages/recruiterCompanyProfile.html");
});

router.get("/profile", (req, res) => {
  res.render("htmlAplication/recruiterPages/recruiterProfile.html");
});

module.exports = router;
