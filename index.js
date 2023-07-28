// Servidor de aplicacion
const path = require("path");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/html"));
app.engine("html", require("ejs").renderFile);
app.use(express.static("src"));
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.get("/landingPage", (req, res) => {
  res.render("htmlAplication/landingPage/aplicationLandingPage.html");
});

app.get("/landingPage/welcome", (req, res) => {
  res.render("htmlAplication/landingPage/welcome.html");
});
