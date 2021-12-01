const express = require('express');
const videosRouter = express.Router();
const { reqBodyValidator, idValidator, nextId } = require('../errorHandling');
const Video = require('../db/models/Video');
require('../db/mogoose');

videosRouter
  .route('/')
  .get((req, res) => Video.find({}).then(response => res.send(response)))  
  .post((req, res) => {
    res.setHeader('content-type', 'application/json');
    reqBodyValidator(req);
    const video = new Video(req.body);
    video.save().then(response => res.send(response));
  });

videosRouter
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

module.exports = videosRouter;
