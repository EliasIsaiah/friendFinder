const routes = require('express').Router();

routes.get('/', (req, res) => {

  res.status(200).json({ message: 'htmlRoutes Connected!' });
  res.sendFile(path.join(__dirname, "app", "public", "home.html"));
});

module.exports = routes;