
document.write("<script src='isProfane.js' type='text/javascript'></script>");
// var input;

function run(){
// inputSentence = input;                                       // Variable inputSentence is in isProfane.js
let profanityFound = isProfane(inputSentence);

if(profanityFound)
    console.log("inputSentence contains profanity" );
else
    console.log("inputSentence is clean");
}