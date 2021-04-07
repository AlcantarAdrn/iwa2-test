const express = require('express'),
router = express.Router(),
multer = require('multer');

//itemCtrl = require('./item-controller');

var userCtrl = require('./user-controller'),
imageCtrl = require('./image-controller');


// router.get('/hello', itemCtrl.getWorld);
// router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);
// router.post('/hello', itemCtrl.postWorld);

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users:/id',userCtrl.getUser);
router.put('/users:/id',userCtrl.updateUser);
router.delete('/users:/id',userCtrl.deleteUser);

module.exports.UPLOAD_PATH = "uploads";
let upload = multer({ dest: module.exports.UPLOAD_PATH});

router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);

module.exports = router;