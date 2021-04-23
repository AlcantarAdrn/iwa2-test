const mongoose = require('mongoose');

let recordSchema = new mongoose.Schema({
    artist: String,
    title: String,
    price: Number

},{timestamps:true});


module.exports = mongoose.model('Record',recordSchema);