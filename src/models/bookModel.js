const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
	author: {type: ObjectId, ref: "NewAuthor"},//621fadb82f6f315dc9cbb533
	price: Number,
    ratings: Number,
	publisher: {type: ObjectId, ref: "NewPublisher"}//621face52f6f315dc9cbb531
}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)