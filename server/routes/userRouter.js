const express = require('express');
const userRouter = express.Router();
const { reqBodyValidator, idValidator, nextId } = require('../errorHandling');
const User = require('../db/models/User');
const auth = require('../middleware/auth')
require('../db/mogoose');

userRouter
  .route('/')
  .get(auth, (req, res) => User.find({}).then(response => res.send(response)))
  .post(async (req, res) => {
    res.setHeader('content-type', 'application/json');
    reqBodyValidator(req);
    const user = new User(req.body);
    user.save().then(async (response) => {
      res.send(response)
    });
  });

  
  userRouter.post('/login', async(req, res) => {
    console.log('im here');
    try{
      const user = await User.findByCredentials(req.body.email, req.body.password);
      const token = await user.generateAuthToken();
      // res.send({user, token});
      res.cookie("token", token, {
        httpOnly: true
      }).send("cookie set");
    }catch(e){
      res.status(400).send(e.message)
    }
  })

  userRouter.get('/logout',auth, async(req, res)=>{
    console.log('logout', req.headers);
   req.user.tokens = [];
   req.user.save();
   res.clearCookie("token").send('loggedOut')
  });
  
  userRouter
  .route('/profile')
  .get(auth, (req, res) => {
    res.send(req.user)
  })
  .put(auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'mobile_number', 'admission_date']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
      updates.forEach(update => req.user[update] = req.body[update]);
      await req.user.save();
      res.send(req.user)
    } catch (e) {
      res.status(400).send(e)
    }
  })
  .delete(auth, async (req, res) => {
    await req.user.remove();
    res.status(204).send('account deleted successfully')
  });

module.exports = userRouter;
