const jwt = require("jsonwebtoken");

const authenticate = function(req, res, next){
    try{
        let token = req.headers["x-Auth-token"]
    if(!token){
      token = req.headers["x-auth-token"];
    }
    if(!token){
      return res.status(401).send({Err: "token must be present in header"})
    }
    const decodedToken = jwt.verify(token, "kurama")
    if(!decodedToken){
      return res.status(401).send({Err: "invalid token"})
    }next() }
  
    catch(err){
        res.status(500).send({msg: "Error" ,error: err.message}) }
 
}

const authorise = function(req, res, next){
    try{
        let token = req.headers["x-Auth-token"]
    if(!token){
      token = req.headers["x-auth-token"];
    }
    const decodedToken = jwt.verify(token, "kurama")
    const {userId} = req.params;
    if(userId == decodedToken.id){
      next()
    }else{
      res.status(401).send({Err: "invalid token for this user"})
    }}
  
  catch(err){
    res.status(500).send({msg: "Error" ,error: err.message}) }
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise