const express = require('express');
const coursesRouter = express.Router();
const coursesData = require('../db/courses.json');
const { reqBodyValidator, idValidator, nextId } = require('../errorHandling');

let items = coursesData;

coursesRouter
  .route('/')
  .get((req, res) => {
    res.send(items);
  })
  .post((req, res) => {
    res.setHeader('content-type', 'application/json');
    reqBodyValidator(req);
    const newItem = {
      id: nextId(items).toString(),
      link: req.body.link,
    };
    items = [...items, newItem];
    res.status(201);
    res.send(newItem);
  });

coursesRouter
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

module.exports = coursesRouter;
