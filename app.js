
const express = require("express");

const app = express();

app.use(express.json());

// Home API
app.get("/", (req, res) => {
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
