
document.write("<script src='isProfane.js' type='text/javascript'></script>");

function run(input_sentence){
let profanityFound = isProfane(input_sentence);

if(profanityFound)
    console.log("inputSentence contains profanity" );
else
    console.log("inputSentence is clean");
}