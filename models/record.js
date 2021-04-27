const mongoose = require('mongoose');
//In order to interact with the MongoDB 

//We define the users schema, when an user is created we must follow this schema
let recordSchema = new mongoose.Schema({ 
    artist : String,
    title : String,
    section : {
        type: String,
        enum: ['POP', 'ALTERNATIVE', 'FOLK-POP', 'INDIE']

    },
    price : String
    });

//And we export the user schema 
module.exports = mongoose.model('Record', recordSchema);