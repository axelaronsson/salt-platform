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

  userRouter
  .route('/authorize')
  .get(auth, async (req, res) => {
    const user = await req.user;
    // const userCopy = {...user}
    // const key = '$isNew';
    console.log(user.role);
    res.send({role: user.role});
  })
  
  userRouter.post('/login', async(req, res) => {
    try{
      const user = await User.findByCredentials(req.body.email, req.body.password);
      const token = await user.generateAuthToken();
      res.cookie("token", token, {
        httpOnly: false,
        secure:true
      }).send('cookie set');
    }catch(e){
      res.status(400).send(e.message)
    }
  })

  userRouter.post('/logout',auth, async(req, res)=>{
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
    const allowedUpdates = ['name', 'email', 'password', 'mobile_number', 'bio','imgUrl', 'admission_date']
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
