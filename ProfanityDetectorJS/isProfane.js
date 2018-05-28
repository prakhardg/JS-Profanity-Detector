var sentence;
document.write("<script src='hashset.js' type='text/javascript'></script>");
document.write("<script src='stemmer.js' type='text/javascript'></script>");


/*
Function takes the string argument and returns boolean value true if the sentence contains profanity
Otherwise returns false.
*/
var isProfane = function (sentence){
  
    var profane = false;            // Flag variable which checks for profanity of the content.
    var s  = sentence;
    var N = 1;
    var inputSize = s.split(/\s+/).length;

    while(N<=Math.min(4, inputSize))
    {
      var ngrams = getNgrams(s, N).values();        //Converting hashset of ngrams into array os ngrams
      
      for(var i = 0; i< ngrams.length; i++){
          word = stemmer(ngrams[i].toLowerCase());
          if(profaneStemmed.hasOwnProperty(word))           // profaneStemmed is from stemmer.js--->dictionary.js
          {
              profane = true;
              break;
          }
        }
      if(profane) break;
      N = N+1;
}
return profane;
      
}


/*
Function takes the String input and the N value to and returns the hashset of the Ngrams
*/
var getNgrams = function(input, N){
  var words = input.split(/\s+/);
  var ngramHashSet = new HashSet();
  var len = words.length;

  for(var currentIndex = 0; currentIndex<= len-N; currentIndex++){
    var stringBuilder  = words[currentIndex] ;
    for(var next = currentIndex+1; next-currentIndex<N;next++){
        // stringBuilder.append("_").append(words[next]);
        stringBuilder+= "_"  + words[next] ;
        }
    var ngramHashSetValue = stringBuilder;
    ngramHashSet.add(ngramHashSetValue);
}
return ngramHashSet;
}