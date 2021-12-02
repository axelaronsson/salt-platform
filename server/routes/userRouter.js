const express = require('express');
const userRouter = express.Router();
const { reqBodyValidator, idValidator, nextId } = require('../errorHandling');
const User = require('../db/models/User');
const bcrypt = require('bcryptjs');
require('../db/mogoose');

userRouter
  .route('/')
  .get((req, res) => User.find({}).then(response => res.send(response)))
  .post( async (req, res) => {
    res.setHeader('content-type', 'application/json');
    reqBodyValidator(req);
    const user = new User(req.body);
    user.save().then(response => res.send(response));
  });

userRouter
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
    // idValidator(id, items);
    await User.deleteOne({_id: id});
    console.log(id);
    res.status(204);
    res.end()
  });

module.exports = userRouter;
