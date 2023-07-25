const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const slug = require('mongoose-slug-generator')

// mongoose.plugin(slug);

const Customer = new mongoose.Schema({
    name: {type : String, require: true},
    adress : {type : String},
    image : {type : String},
    phone_number : {type: String},
    email: { type: String}
},{
    timestamps: true,
});
module.exports = mongoose.model('Customer', Customer);