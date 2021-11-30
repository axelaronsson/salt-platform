const express = require('express');
let githubRouter = express.Router();
const githubData = require('../db/github.json');

githubRouter.get('/', (req, res) => {
  console.log('wussup');
  res.send(githubData);
});


module.exports = githubRouter;