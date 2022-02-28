const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });
      bookName : {type : String , required: true},
     prices: {  indianPrice: String, europePrice: String, },
     year: {type: Number, default: 2021, required:true},
     tags: [{type:String}],
     authorName : String,
     totalPage :Number,
     stockAvailable :Boolean
 }, { timestamps: true });



module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
