const express = require('express');
const userRouter = express.Router();
const { reqBodyValidator, idValidator, nextId } = require('../errorHandling');
const User = require('../db/models/User');
require('../db/mogoose');

userRouter
  .route('/')
  .get((req, res) => User.find({}).then(response => res.send(response)))
  .post(async (req, res) => {
    res.setHeader('content-type', 'application/json');
    reqBodyValidator(req);
    const user = new User(req.body);
    user.save().then(async (response) => {
      await user.genrateAuthToken();
      res.send(response)
    });
  });

userRouter.post('/login', async(req, res) => {
  console.log('im here');
  console.log(req.body)
  try{
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({user, token});
  }catch(e){
    res.status(400).send(e.message)
  }
})

userRouter
  .route('/:id')
  .put(async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'mobile_number', 'admission_date']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
      const user = await User.findById(req.params.id);
      updates.forEach(update => user[update] = req.body[update]);
      await user.save();
      if (!user) {
        return res.status(404).send()
      }

      res.send(user)
    } catch (e) {
      res.status(400).send(e)
    }
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    // idValidator(id, items);
    await User.deleteOne({ _id: id });
    console.log(id);
    res.status(204);
    res.end()
  });

module.exports = userRouter;
