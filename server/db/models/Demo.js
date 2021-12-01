const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DemosSchema = new Schema({
    productId: Number,
    description: String ,
    link: String ,
});

const Demo = mongoose.model('Demo', DemosSchema);

module.exports = Demo;
