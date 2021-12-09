const express = require('express');
const slidesRouter = express.Router();
const { reqBodyValidator, idValidator, nextId } = require('../errorHandling');
const Slides = require('../db/models/Slides');
require('../db/mogoose');

slidesRouter
  .route('/')
  .get((req, res) => Slides.find({}).then(response => res.send(response)))  
  .post((req, res) => {
    res.setHeader('content-type', 'application/json');
    reqBodyValidator(req);
    const slides = new Slides(req.body);
    slides.save().then(response => res.send(response));
  });

slidesRouter
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
    await Slides.deleteOne({_id: id});
    res.status(204);
    res.end()
  });

module.exports = slidesRouter;
