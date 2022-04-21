const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Jason Blazzard');
});

module.exports = routes;