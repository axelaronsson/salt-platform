const mongoose = require('mongoose');
require('dotenv').config();

let uri = process.env.NEXT_PUBLIC_MONGO_URI

mongoose.connect(uri, {useNewUrlParser: true});
