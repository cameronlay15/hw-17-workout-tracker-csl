const express = require("express");
const mongoose = require("mongoose");

const logger = require("morgan");

const db = require("./models");

const app = express();

const path = require("path");

app.use(logger("dev"));

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/exercise.html`));
  });
  
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/stats.html`));
  });
  
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static("public"));
  require("./routes/routes.js")(app);