/**
 * Fetches the dictionary as JSON from the cloudinary CDN and sets value for the ProfaneDictionary object.
 * 
 */
class ProfaneDictionary {
  constructor() {
    this.value = '{}';
  }
  setValue(val) {
    this.value = val;
  }
  getValue() {
    return this.value;
  }
}

let profaneDict = new ProfaneDictionary();

function CallURL() {
  fetch('http://res.cloudinary.com/dzbqhaluy/raw/upload/v1527656664/profane_words.json')
    .then((resp) => resp.json())
    .then(function (data) {
      profaneDict.setValue(data);
    });
}


