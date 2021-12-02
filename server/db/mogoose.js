const mongoose = require('mongoose');
require('dotenv').config();

let uri = process.env.REACT_APP_MONGO_URI

mongoose.connect(uri, {useNewUrlParser: true});
