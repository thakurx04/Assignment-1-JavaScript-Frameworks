const express = require("express");

const app = express();

// Built-in middleware to parse JSON
app.use(express.json());

// Basic test route
app.get("/", (req, res) => {
  res.json({ message: "Portfolio API is running" });
});

module.exports = app;
