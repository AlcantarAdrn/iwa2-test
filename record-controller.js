var Record = require('./models/record')

exports.createRecord = function(req, res) { 
    var newRecord = new Record(req.body);
    newRecord.save(function (err, record) { 
        if (err) { 
            res.status (400).json(err);
        }
        res.json(record); 
});
};

exports.getRecords = function(req, res) {
  Record.find({}, function (err, records) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(records);
  }); 
};

exports.getRecord = function(req, res) {
  Record.findOne({_id: req.params.id}, function (err, records) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(records);
  }); 
};

exports.updateRecord = function(req, res) {
  Record.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, records) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(records);
  }); 
};

exports.deleteRecord = function(req, res) {
  Record.findByIdAndRemove({_id: req.params.id}, function (err, records) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(records);
  }); 
};