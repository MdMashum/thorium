const bookModel= require("../models/bookModel")

    const BookDetails= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

    const getBookDetails= async function (req, res) {

    let allbook= await bookModel.find()
    res.send({msg: allbook})
}
module.exports.BookDetails= BookDetails
module.exports.getBookDetails= getBookDetails
