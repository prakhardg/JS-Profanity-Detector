
document.write("<script src='isProfane.js' type='text/javascript'></script>");
var input;

function run(){
sentence = input;                                       // Variable sentence is in isProfane.js
var profanityFound = isProfane(sentence);

if(profanityFound)
    console.log("Sentence contains profanity");
else
    console.log("Sentence is clean");

}