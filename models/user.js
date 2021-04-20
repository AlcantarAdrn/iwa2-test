const mongoose = require('mongoose');
//In order to interact with the MongoDB 

//We define the users schema, when an user is created we must follow this schema
let userSchema = new mongoose.Schema({ 
    email: { type: String, unique: true, lowercase: true},
    password: String,
    username: String,
    gender: { 
        type: String,
        enum: ['MALE', 'FEMALE']
    },
    phone: Number 
});

//And we export the user schema 
module.exports = mongoose.model('User', userSchema);