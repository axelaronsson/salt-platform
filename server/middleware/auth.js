const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../db/models/User');

const auth = (async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        console.log(token);
        const decode = jwt.verify(token, process.env.AUTH_SECRET);
        const user = await User.findOne({_id: decode._id, 'tokens.token':token})
        if(!user){
          throw new Error('user not found');
        }
        req.user = user;
        next();
      }catch (err) {
     res.status(401).send({error:'please Authenticate'})
    }
});

module.exports = auth;
