let Record = require('./models/record');

exports.createRecord = function(req,res) {

    let newRecord = new Record(req.body); 
    newRecord.save(function(err, record){
        if(err) {
            res.status(400).json(err);
        }
        res.json(record);

    });
};

exports.getRecords = function(req, res){
    Record.find({}, function(err, records) {
        if(err){
            res.status(400).json(err);
        }
        res.json(records);
    });
};