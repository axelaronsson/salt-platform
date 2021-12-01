const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GithubSchema = new Schema({
    productId: Number,
    description: String ,
    link: String ,
});

const Github = mongoose.model('Github', GithubSchema);

module.exports = Github;
