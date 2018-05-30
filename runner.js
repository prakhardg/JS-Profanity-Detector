document.write("<script src='isProfane.js' type='text/javascript'></script>");

function run(input_sentence) {
    let profanityFound = isProfane(input_sentence);

    if (profanityFound)
        console.log("profane");
    else
        console.log("clean");
}