const express = require('express');
const githubRouter = express.Router();
const { reqBodyValidator, idValidator, nextId } = require('../errorHandling');
const Github = require('../db/models/Github');
require('../db/mogoose');

githubRouter
  .route('/')
  .get((req, res) => Github.find({}).then(response => res.send(response)))  
  .post((req, res) => {
    res.setHeader('content-type', 'application/json');
    reqBodyValidator(req);
    const github = new Github(req.body);
    github.save().then(response => res.send(response));
  });

githubRouter
  .route('/:id')
  .put((req, res) => {
    res.setHeader('content-type', 'application/json');
    const { id } = req.params;
    idValidator(id, items);
    const editedItem = {
      id: id,
      link: req.body.link,
    }
    items = items.map(item => item.id === id ? editedItem : item);
    res.status(204);
    res.end();
  })
  .delete( async (req, res) => {
    const { id } = req.params;
    await Github.deleteOne({_id: id});
    res.status(204);
    res.end()
  });

module.exports = githubRouter;
