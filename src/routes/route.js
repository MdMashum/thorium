const express = require('express');
const router = express.Router();

// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })
router.get('/movies',function (req ,res) {

    res.send('["fukrey","delhi","kapil","abul","mumbai"]')
});

// fetch movie by id
  router.get('/movies/:movieId', function(req,res){
      mov=["fukrey","delhi","kapil","abul","mumbai"]
      let value=req.params.movieId;
      if(value>mov.length-1){
          res.send('"Not found"')
      }
      else {
          res.send(mov[value])
      }
  })

// api fetch all movies

  router.get('/moviez' ,function(req,res){

    res.send([{id:1,name: 'rock'},{id:2,name: 'rockstar'},{id:3,name: 'Idiot'},{id:4,name: 'puspha'},])
  });

  // fetch all movie with index
  router.get('/film/:filmid' , function(req,res){
let movi =[{id:1,name: 'rock'},{id:2,name: 'rockstar'},{id:3,name: 'Idiot'},{id:4,name: 'puspha'},]
let value=req.params.filmid;
let found =false;
for(i=0;i<movi.length;i++){
    if(value>movi.length-1){
        res.send('"Not found"')
    }
    else {
        res.send(movi[value])
    }
}
  })

module.exports = router;
