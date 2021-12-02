const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email_address: String,
    password: String ,
    role: String ,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;