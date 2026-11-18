
const express = require("express");

const path = require("path");

const app = express();

app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// Home API
app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to GCP CI/CD Project!"
  });
});

// Health check API
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Application is running successfully"
  });
});

module.exports = app;
