const UserModel= require("../models/userModel")
var ip = require("ip");
let current_datetime = new Date()
let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds() 


const basicCode = async function (req, res){
    var fullUrl =  req.originalUrl;
    console.log(formatted_date,  ip.address(), fullUrl)
    //console.log("hey man, you have reached the handler")
    res.send({msg: "this is coming controller (handler)"})
}

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const datalogged = async function (req, res){
    var fullUrl =  req.originalUrl;
    console.log(formatted_date,  ip.address(), fullUrl)
    res.send({msg: "You Are In Profile"})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode
module.exports.datalogged=datalogged