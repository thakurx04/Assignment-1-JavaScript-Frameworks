const express = require("express");
const router = express.Router();

const {
  getProfile,
  getAbout,
  getProjects
} = require("../controllers/portfolioController");

router.get("/api/profile", getProfile);
router.get("/api/about", getAbout);
router.get("/api/projects", getProjects);

module.exports = router;
