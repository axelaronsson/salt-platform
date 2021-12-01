const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    productId: Number,
    description: String ,
    link: String ,
});

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;
