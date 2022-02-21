const express = require('express');
const lodash = require('lodash')
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

router.get('/hello', function(req, res){
   
    const arrng = require("lodash");
    // Arrange the array
    let arr = ['Jan', 'Feb', 'March', 'April', 'may', 'june'];
     console.log(arrng.chunk(arr, 2))
    res.send('Welcome to my application.');
    // last 9 elements 
    for (let i = 1; i < 20; i+=2) {
        let x = arrng.tail(i);
        console.log(x);
       }
    // let newArray = arrng.tail(x);
  
  }); 
   
module.exports = router;