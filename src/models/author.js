const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const authors = new mongoose.Schema( {
    
     id:Number ,
    Author_Name: String,
    Age: Number,
    Address : String
   
}, { timestamps: true });

module.exports = mongoose.model('Authors', authors) //users

