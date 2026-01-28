const express = require("express");
const router = express.Router();

const {
  getProfile,
  getAbout,
  getProjects
} = require("../controllers/portfolioController");

const { postContact } = require("../controllers/contactController");
const validateContact = require("../middleware/validateContact");

router.get("/api/profile", getProfile);
router.get("/api/about", getAbout);
router.get("/api/projects", getProjects);

router.post("/api/contact", validateContact, postContact);

module.exports = router;
