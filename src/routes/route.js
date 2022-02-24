const express = require('express');
const router = express.Router();


// router.post('/players/:playerName/bookings/:bookingId', function (req, res) {

//     router.get("/get-query-1", function(req,res){
//         let data =req.query
//         console.log(data)
//         res.send(data:data ,status :true})
//         })
        
        
//         // fail less than 40
        
//          router.get("/get-query-2", function(req,res){
//          let marks=req.query.marks
//         let result
//          if (marks>40) {result = pass}
//         else{
//         result=fail
//         }
//          res.send(result: result,status :true})
//          })
        
//         // optimize code
        
//          router.get("/get-query-2", function(req,res){
//          let marks=req.query.marks
//         let result =marks>40? "pass":"fail"
//         //let result ="fail"
//          if (marks>40) {result = pass}
//          // else{result=fail}
//          res.send(result: result,status :true})
//          })
        
        
        
        
//         //post request
//         let myarr =[23,45,67,2838,3423,423,24,4,234,234]
//         //filter out all greater than input is received
//          router.post("/post-query-1", function(req,res){
//         let input =req.query.input
//         let finalArr =[]
//         for(i=0;i<myArray.length;i++){
//         if(myArr[i] > input ) finalArr.push(myArr[i])}
//         }
//          //let data=req.query
//         //console.log(data)
//          res.send(result: finalArr , status :true})
//          })
        
        
        
//         // use filter function
         
        
//         router.post("/post-query-1", function(req,res){
//         let input =req.query.input
//         let finalArr =myArr.filter (ele => ele > input)
//         //let finalArr =[]
//         //for(i=0;i<myArray.length;i++){
//         //if(myArr[i] > input ) finalArr.push(myArr[i])}
//         //}
//          //let data=req.query
//         //console.log(data)
//          res.send(result: finalArr , status :true})
//          })
  //customize code

    //let finalArr =[]
    //for(i=0;i<myArray.length;i++){
    //if(myArr[i] > input )
    // finalArr.push(myArr[i])}
    //}
     //let data=req.query
    //console.log(data)    
   // res.send(  { data: players , status: true }  )

        
let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]

router.post("/election", function (req, res) {
    let votingAge = req.query.votingAge

    let mahir=[];
    for (let i = 0; i < persons.length; i++) {

        if (persons[i].age > votingAge) {
        
            persons[i].votingStatus = true
            mahir.push(persons[i])
        }
    }
if (mahir.length>0)
{
    return res.send(mahir)
   // return res.send("you are eligible")
}
else{
    return res.send(" not eligible ")
}

  })

 

module.exports = router;
