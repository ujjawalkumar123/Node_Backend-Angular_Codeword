var express = require('express');
var router = express.Router();
var codewordSet = require('../models/codewordset.model');

// Data base connection
require('../Database/databaseconfig')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/addCodewordSet', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide Codeword Set details" })
  }
  var codewordSetObj = new codewordSet(req.body);
  codewordSetObj.save(function (err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err: err })
    }
    else {
      res.status(200).json({ msg: "Codeword set record saved successfully", data: data })
    }
  });
})


router.get('/getCodewordSet', function (req, res, next) {
  codewordSet.find({}, function (err, results) {
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "Codeword set record fetched successfully", data: results })
    }
  })
});


module.exports = router;
