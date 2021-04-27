const express = require('express'),
router = express.Router();



let userCtrl = require('./user-controller');
let recordCtrl = require('./record-controller')

 router.post('/records', recordCtrl.createRecord);
 router.get('/records', recordCtrl.getRecords);
 router.get('/records/:id',recordCtrl.getRecord);
 router.put('/records/:id',recordCtrl.updateRecord);
 router.delete('/records/:id',recordCtrl.deleteRecord);

////////////////////////////////

 router.post('/users', userCtrl.createUser);
 router.get('/users', userCtrl.getUsers);
 router.get('/users/:id',userCtrl.getUser);
 router.put('/users/:id',userCtrl.updateUser);
 router.delete('/users/:id',userCtrl.deleteUser);

module.exports.UPLOAD_PATH = "uploads";

let multer = require("multer");
let upload = multer({ dest: module.exports.UPLOAD_PATH});
let imageCtrl = require('./image-controller');


router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('images/:id',imageCtrl.deleteImage);

module.exports = router;