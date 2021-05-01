const User = require('../models/user')

exports.createUser = function(req, res) { 
    const newuser = new User({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        gender : req.body.gender,
        phone: req.body.phone

    })
    newuser.save(function (err, user) { 
        if (err) { 
            res.status (400).json(err);
        }
        res.json(user); 
});
};



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