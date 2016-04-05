var express = require('express');
var router = express.Router();
var fs = require('fs');

var files = new Array();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/uploadFile', function (req, res, next){
    res.render('fileUpload');
});

router.post('/uploadFile', function ( req, res, next){
    console.log("In POST /uploadFile");
    console.log(req.files[0].filename);
    
    req.files[0]._id = Date.now();
    console.log(req.files[0]);
    
    files.push(req.files[0]);
    res.redirect('/files');
});

module.exports = router;
