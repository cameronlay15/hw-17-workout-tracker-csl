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

  const PORT = process.env.PORT || 3000;

const DeprecationWarning = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hw-17-workout-tracker", DeprecationWarning)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`localhost:${PORT}`);
    });
  });