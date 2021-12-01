const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    productId: Number,
    description: String ,
    link: String ,
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
