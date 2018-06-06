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
  fetch('http://res.cloudinary.com/dzbqhaluy/raw/upload/v1528264211/profane_wordsV4.json')
    .then((resp) => resp.json())
    .then(function (data) {
      profaneDict.setValue(data);
    });
}


