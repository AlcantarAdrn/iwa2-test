const mongoose = require('mongoose');

let recordSchema = new mongoose.Schema({ 
    artist : {
        type: String,
        required: true
    },
    album : {
        type: String,
          required: true
    },
    section : {
        type: String,
        enum: ['POP', 'ALTERNATIVE', 'FOLK-POP', 'INDIE'],
          required: true
    },
    price : 
    {
        type: Number,
        required: true
    }
    });

//And we export the user schema 
module.exports = mongoose.model('Record', recordSchema);