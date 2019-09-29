const routes = require('express').Router();
const path = require("path");
const surveyQuestions = require("../data/questions.js");


routes.get('/', (req, res) => {

  // res.status(200).json({ message: 'htmlRoutes Connected!' });
  res.sendFile(path.join(__dirname, "..", "public", "home.html"));
});

routes.get('/survey', (req, res) => {
  // res.sendFile(path.join(__dirname, "..", "public", "survey.html"));
  console.log(surveyQuestions);
  res.render("survey", {surveyQuestions: surveyQuestions});
})

routes.get('/test', (req, res) => {
  // res.sendFile(path.join(__dirname, "..", "public", "survey.html"));
  // console.log(surveyQuestions);
  res.render("formTest");
})

module.exports = routes;