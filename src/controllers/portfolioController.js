const portfolioData = require("../data/portfolioData");

exports.getProfile = (req, res) => {
  res.status(200).json(portfolioData.profile);
};

exports.getAbout = (req, res) => {
  res.status(200).json(portfolioData.about);
};

exports.getProjects = (req, res) => {
  res.status(200).json(portfolioData.projects);
};
