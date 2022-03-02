// const AuthorModel= require("../models/authorModel")
// const NewAuthor = require("../models/newAuthor")
// const NewPublisher= require("../models/newPublisher")

// const createAuthor= async function (req, res) {
//     let author = req.body
//     let authorCreated = await AuthorModel.create(author)
//     res.send({data: authorCreated})
// }

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

// const createnewAuthor= async function (req, res) {
//     let new_author = req.body
//     let authorCreated = await NewAuthor.create(new_author)
//     res.send({data: authorCreated})}
    
// const createpublisher= async function (req, res) {
//     let publicser = req.body
//     let authorCreated = await NewPublisher.create(publicser)
//     res.send({data: authorCreated})
// }
// const Authorpresent= async function (req, res) {
//     let new_author = req.body
//     let authorCreated = await NewAuthor.create({new_author:"_id"})
//    if(authorCreated==_id) res.send({data: authorCreated})
//    else res.send({msg:"No id found"})
// }

// module.exports.createAuthor= createAuthor
// module.exports.getAuthorsData= getAuthorsData
//  module.exports.createnewAuthor= createnewAuthor
//  module.exports.createpublisher=createpublisher
//  module.exports.Authorpresent=Authorpresent


const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

module.exports.createAuthor= createAuthor