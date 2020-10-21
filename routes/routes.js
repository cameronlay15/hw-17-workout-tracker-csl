const db = require("../models");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get('/exercise', (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/exercise.html`));
  });
  
  app.get('/stats', (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/stats.html`));
  });

  app.get("/api/workouts/range", (req, res) => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    db.Workout.find({
      day: {
        $exists: true,
      },