const routes = require('express').Router();

routes.post('/', (req, res) => {
  res.status(200).json({ message: 'apiRoutes Connected!' });
  console.log(req.body);
});

module.exports = routes;