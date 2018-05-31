/**
 * Fetches the dictionary as JSON from the cloudinary CDN and sets value for the ProfaneDictionary object.
 * 
 */
function ProfaneDictionary(){
  this.value = {};
  this.getValue = function(){
    return this.value;
  }
  this.setValue = function(val){
    this.value = val;
  }
}

let profaneDict = new ProfaneDictionary();

function CallURL() {
  fetch('http://res.cloudinary.com/dzbqhaluy/raw/upload/v1527746265/profane_wordsv2.json')
    .then((resp) => resp.json())
    .then(function (data) {
      profaneDict.setValue(data);
    });
}


