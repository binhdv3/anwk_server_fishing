const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const slug = require('mongoose-slug-generator')

// mongoose.plugin(slug);

const Cart = new mongoose.Schema({
    id_product : {type : ObjectId}, 
    id_customer: {type : ObjectId},
    quantity : {type : Number}
},{
    timestamps: true,
});
module.exports = mongoose.model('Cart', Cart);