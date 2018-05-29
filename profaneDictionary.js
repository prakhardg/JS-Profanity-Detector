var profaneDict;
function CallURL()  {
// console.log("in herre");
$.ajax({
async: false,
url: 'http://res.cloudinary.com/dzbqhaluy/raw/upload/v1527507132/profane_json.json',
type: "GET",
dataType: "json",
success: function(msg)  {
JsonCallback(msg)
},
error: function()  {
  console.log("Some Error occured");
}
});
}

function JsonCallback(json)  {
profaneDict = json;
// console.log(JSON.stringify(json));
}