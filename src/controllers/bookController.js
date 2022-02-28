const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBookList= async function (req, res) {
    //let allBooks= await BookModel.find(  { authorName : "SK" , isPublished: true }  )
    let allBooks= await BookModel.find(  { authorName : "kopal" , bookName: "javascript" }  )
    res.send({msg: allBooks})
}
const getBooksInYear= async function (req, res) {
    let bookAllYear= await BookModel.find(  { year : 2021 }  )
    res.send({msg: bookAllYear})
}

const getParticularBooks= async function (req, res) {
    let particularbook= await BookModel.find(  { bookName : "javascript" }  )
    res.send({msg: particularbook})
}

const getXINRBooks= async function (req, res) {
    let XINRBooks= await BookModel.find({prices: {$gt:400 , $lt:100}}  )
    res.send({msg: XINRBooks})
}

const getRandomBooks= async function (req, res) {
    let RandomBooks= await BookModel.findOne( {totalPage:332} )
    res.send({msg: RandomBooks})
}
 
module.exports.createBook= createBook
module.exports.getBookList= getBookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks
