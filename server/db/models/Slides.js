const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SlidesSchema = new Schema({
    productId: Number,
    description: String ,
    link: String ,
});

const Slides = mongoose.model('Slides', SlidesSchema);

module.exports = Slides;
