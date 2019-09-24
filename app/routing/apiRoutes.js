const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'apiRoutes Connected!' });
});

module.exports = routes;