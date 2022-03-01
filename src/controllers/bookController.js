const { count } = require("console")
const author = require("../models/author")
const BookModel= require("../models/bookModel")
const Books = require("../models/Books")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}

const authorbooks= async function (req, res) {
    let data= req.body

    let savedData= await Books.create(data)
    res.send({msg: savedData})
}


const authorsname= async function (req, res) {
    let data= req.body

    let savedData= await author.create(data)
    res.send({msg: data})
}

const getauthor= async function (req, res) {
    let chetan= await author.find( {Author_Name:"Chetan"} )
    res.send({msg: chetan})
}

const updateprice= async function (req, res) {
    let data = req.body 
    let updatedprice= await author.findOneAndUpdate( 
        { Author_Name: "Chetan Bagat"} , //condition
        { $set: data }, //update in data
        { new: true } // new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     res.send( { msg: data})
}




module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
module.exports.authorbooks=authorbooks
module.exports.authorsname=authorsname
module.exports.getauthor=getauthor
module.exports.updateprice=updateprice