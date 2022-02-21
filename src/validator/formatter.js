
// function trim(message){
//     console.log(message)
// }
function trimSentence(){
let str=' fuNcTionUp  ';
var cleanStr=str.trim().toLowerCase();//trim() returns string with outer spaces removed
console.log(cleanStr)
var cleanStr1=str.trim().toUpperCase();
console.log(cleanStr1)
}
//module.exports.endpoint=url;
module.exports.trimSentence=trimSentence;