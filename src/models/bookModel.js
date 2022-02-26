const mongoose = require('mongoose');

    const bookSchema = new mongoose.Schema( {
    
    BookName: {type:String,required:true},
    AuthorName: {type:String,required:true},
    category : {
        type: String,
        enum: ["science", "computer", "politics" ,"biology" ,"earth"] 
    },
    Year: Number
}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema) 


