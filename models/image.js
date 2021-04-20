const mongoose = require('mongoose');
//Moongose that allows us to connecto to the MongoDB 

//Image schema, for an image to be uploaded we need to follow the schema

let imageSchema = new mongoose.Schema({
    filename: String,
    originalName: String,
    desc: String
},
{ timestamps: true });

//And we export the Image object and the schema 
module.exports = mongoose.model('Image', imageSchema);