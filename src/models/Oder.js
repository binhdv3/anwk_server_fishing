const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const slug = require('mongoose-slug-generator')

// mongoose.plugin(slug);

const Oder = new mongoose.Schema({
    id_customer: {type : ObjectId},
    id_product: {type: ObjectId},
    total_amount: {type : Number},
    quantity: {type : Number},
    oder_date : {type : String}
},{
    timestamps: true,
});
module.exports = mongoose.model('Oder', Oder);