const express = require('express');
const coursesRouter = express.Router();
const { reqBodyValidator, idValidator, nextId } = require('../errorHandling');
const Course = require('../db/models/Course')
require('../db/mogoose');

coursesRouter
  .route('/')
  .get((req, res) => Course.find({}).then(response => res.send(response)))
  .post( async (req, res) => {
    res.setHeader('content-type', 'application/json');
    reqBodyValidator(req);
    const course = new Course(req.body);
    course.save().then(response => res.send(response));
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
