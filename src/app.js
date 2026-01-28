const express = require("express");
const routes = require("./routes");
const logger = require("./middleware/logger");

const app = express();

// Built-in middleware
app.use(express.json());

// Custom middleware
app.use(logger);

// Routes
app.use(routes);

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Portfolio API is running" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

module.exports = app;
