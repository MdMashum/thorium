// function getTimeStamp() {
//     var now = new Date();
//     return ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear() + " " + now.getHours() + ':'
//                   + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
//                   .getSeconds()) : (now.getSeconds())));
//                   console.log(now);
// }
function printDate(){
var currentdate = new Date();
console.log(currentdate);
}
function printMonth(){
    var d = new Date();
var n = d.getMonth()+1;
console.log(n);
   }
function getBatchInfo(message){
    console.log(message)
}

//module.exports.endpoint=url;
module.exports.printDate=printDate;
module.exports.printMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;
