const routes = require('express').Router();
const friends = require("../data/friends.js")

routes.post('/', (req, res) => { //localhost:3000/api
  res.status(200).json({ message: 'apiRoutes Connected!' });
  console.log(req.body);
  friends.addFriend(req.body.name, req.body.photo, req.body.answers);
});

module.exports = routes;