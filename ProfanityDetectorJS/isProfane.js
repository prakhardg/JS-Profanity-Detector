var sentence;
document.write("<script src='hashset.js' type='text/javascript'></script>");
document.write("<script src='stemmer.js' type='text/javascript'></script>");
var isProfane = function (sentence){
  
    var profane = false;
    var s  = sentence;
    var N = 1;
    var inputSize = s.split(/\s+/).length;

    while(N<=Math.min(4, inputSize))
    {
      var ngrams = getNgrams(s, N).values();
      
      for(var i = 0; i< ngrams.length; i++){
          word = stemmer(ngrams[i].toLowerCase());
          if(profaneStemmed.hasOwnProperty(word))
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
    // console.log(ngramHashSetValue+"\n");
    ngramHashSet.add(ngramHashSetValue);
}
return ngramHashSet;

}