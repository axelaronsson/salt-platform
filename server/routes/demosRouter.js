const express = require('express');
const demosRouter = express.Router();
const { reqBodyValidator, idValidator, nextId } = require('../errorHandling');
const Demo = require('../db/models/Demo');
const auth = require('../middleware/auth');
require('../db/mogoose');

demosRouter
  .route('/')
  .get(auth, (req, res) => Demo.find({}).then(response => res.send(response)))  
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
  .delete( async (req, res) => {
    const { id } = req.params;
    await Demo.deleteOne({_id: id});
    res.status(204);
    res.end()
  });

module.exports = demosRouter;
