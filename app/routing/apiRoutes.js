const routes = require('express').Router();
const friends = require("../data/friends.js")

routes.post('/', (req, res) => {
  res.status(200).json({ message: 'apiRoutes Connected!' });
  console.log(req.body);
});

module.exports = routes;