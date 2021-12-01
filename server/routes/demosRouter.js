const express = require('express');
const demosRouter = express.Router();
const { reqBodyValidator, idValidator, nextId } = require('../errorHandling');
const Demo = require('../db/models/Demo');
require('../db/mogoose');

demosRouter
  .route('/')
  .get((req, res) => Demo.find({}).then(response => res.send(response)))  
  .post((req, res) => {
    res.setHeader('content-type', 'application/json');
    reqBodyValidator(req);
    const demo = new Demo(req.body);
    demo.save().then(response => res.send(response));
  });

  demosRouter
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
  .delete((req, res) => {
    const { id } = req.params;
    idValidator(id, items);
    items = items.filter(item => item.id !== id);
    res.status(204);
    res.end()
  });

module.exports = demosRouter;
