const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const slug = require('mongoose-slug-generator')

// mongoose.plugin(slug);

const Account = new mongoose.Schema({
    id_customer: {type : ObjectId},
    account_name : {type : String, require: true},
    password : {type: String}
},{
    timestamps: true,
});
module.exports = mongoose.model('Account', Account);