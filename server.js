const express = require("express");
const { request, response } = require("express");
const app = express();

app.get("/", (request, response) => {
  response.json({
    success: true,
    message: "Medium API",
  });
});

module.exports = app;
