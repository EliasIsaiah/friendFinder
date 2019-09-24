const express = require("express");
// const path = require("path");
const routes = require('./app/routing/index.js');

// app.use(express.static(path.join(__dirname, 'app')));

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing

  app.use('/', routes);

// Turn on that server!
app.listen(PORT, () => {
  console.log('App listening on port 3000');
});