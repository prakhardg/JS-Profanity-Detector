document.write('<script src="profaneDictionary.js" type="text/javascript"> </script>');
document.write('<script src="runner.js" type="text/javascript"></script>');
document.write('<script src="SentenceClass.js" type="text/javascript"></script>');

function getDict() {
    CallURL();
}
function trigger(val_from_input) {
    let input = new Sentence(val_from_input);
    let promise = new Promise(function (resolve, reject) {
        if (input.getSentence() === val_from_input) {
            resolve();
        }
        else reject(Error("inputSentence is null or Dictionary is not loaded"));
    });
    promise.then(function () {
        run(input.getSentence());
    }, function (err) {
        console.log(Error(err));

    });
}