const User = require('../models/user'),
bcrypt = require('bcryptjs'),
jwt = require('jsonwebtoken');


exports.createUser = function(req, res, next) { 
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({error:err
            })
        }
        const user = new User({
        email: req.body.email,
        password: hashedPass,
        username: req.body.username,
        gender : req.body.gender,
        phone: req.body.phone
        })
    
        user.save()
        .then(user => {
          res.json({ message:'User added successfully' 
        }) 
    }).catch(error =>  {res.json({
    message: 'Something went wrong'
})
})

    })
}


exports.login = (req,res) => {

    var username = req.body.username;
    var password = req.body.password;

    User.findOne({$or: [{email:username, phone:username}]})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err , result){
                if(err) {
                    res.json({
                        error:err
                    })
                }
            if(result){
                let token = jwt.sign({name : user.name}, 'verySecretValue', {expiresIn: '1hr'})
                res.json({

                    message: 'Login successful', 
                    token
                })
            }else {
                res.json({
                    message: 'password does not match'
                })

            }

            })

        }else{
            res.json({

                message : 'User not found'
            })
        }
    })

}

exports.getUsers = function(req, res) {
  User.find({}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
   
    res.json(users);
    
}); 
};

exports.getUser = function(req, res) {
  User.findOne({_id: req.params.id}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
  res.json(users);
  
  }); 
};

exports.updateUser = function(req, res) {
  User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};

exports.deleteUser = function(req, res) {
  User.findByIdAndRemove({_id: req.params.id}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};