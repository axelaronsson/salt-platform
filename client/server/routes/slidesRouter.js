const express = require('express');
let slidesRouter = express.Router();
const slidesData = require('./db/slides.json');

githubRouter.get('/', (req, res) => {
  console.log('wussup');
  res.send(githubData);
});


module.exports = githubRouter;