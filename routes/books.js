var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/login.html'));
});

router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Enter Details' });
  // var data = req.params;
  // console.log(data);

});

router.get('/add/:id/:username/:authorname', function(req, res, next) {
  const {id, Username, Authorname}=req.params;
  console.log(id, Username, Authorname);
  res.status(200).json({message : "Details submited successfully"});  
});



router.post('/add', function(req, res, next) {
  console.info({...req.body});
  res.status(200).json({message : "Details submited successfully"});  
});

router.get('/find/:id', function(req, res, next) {
  const {id} = req.params
  console.log(id);
  res.status(200).json({message : "Data found"});
});


module.exports = router;
