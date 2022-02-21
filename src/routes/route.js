const express = require('express');
const router = express.Router();
let obj =require('../logger/logger')
let helper =require('../util/helper')
let format = require('../validator/formatter')
router.get('/test-me', function (req, res) {
    //console.log(obj.endpoint);
    obj.welcome('Mashum');
     helper.printDate();
     helper.printMonth();
     helper.getBatchInfo('Thorium, W3D1, the topic for today is Nodejs module system')
     format.trimSentence();
    res.send('Welcome to my application. I am Mashum and a part of FunctionUp Thorium cohort.');
  
   
});
   

module.exports = router;