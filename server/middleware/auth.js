const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../db/models/User');

const auth = (async (req, res, next) => {
    try {
        const token = req.cookies.token;
        const decode = jwt.verify(token, process.env.NEXT_PUBLIC_AUTH_SECRET);
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
