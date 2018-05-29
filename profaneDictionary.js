/**
 * Fetches the dictionary as JSON from the cloudinary CDN and sets value for the ProfaneDictionary object.
 * 
 */
class ProfaneDictionary{
  constructor(){
    this.value = '{}';
  }
  setValue(val){
    this.value = val;
  }
  getValue(){
    return this.value;
  }
}

let profaneDict = new ProfaneDictionary();

function CallURLPromise(){
  let promise2 = new Promise(function(resolve, reject){
    CallURL();
    if(profaneDict.getValue !='{}') resolve();
    else reject(Error("Error in proFaneDict"));
    });
    return promise2;
}


function CallURL(){

  fetch('http://res.cloudinary.com/dzbqhaluy/raw/upload/v1527602729/profane_json.json')
  .then((resp) => resp.json())
  .then(function(data){
    profaneDict.setValue(data);
  });
}


