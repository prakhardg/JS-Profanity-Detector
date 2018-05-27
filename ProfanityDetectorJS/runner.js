
document.write("<script src='isProfane.js' type='text/javascript'></script>");
var input = prompt('Enter the sentence:');
sentence = input;
var profanityFound = isProfane(sentence);
if(profanityFound){
    console.log("Sentence contains profanity");
}
else
{
    console.log("Sentence is clean");
}
