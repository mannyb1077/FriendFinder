var path = require("path");
var express = require("express");
var app = express.Router();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

module.exports = app;