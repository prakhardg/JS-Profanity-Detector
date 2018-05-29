var inputSentence;
document.write("<script src='hashset.js' type='text/javascript'></script>");
document.write("<script src='stemmer.js' type='text/javascript'></script>");

// var profaneDict = new Promise()









/*
Function takes the string argument and returns boolean value true if the inputSentence contains profanity
Otherwise returns false.
*/
function isProfane(inputSentence){
    //use Let and const for variable declartion
    let profane = false;            // Flag variable which checks for profanity of the content.
    let s  = inputSentence;
    let N = 1;
    const inputSize = s.split(/\s+/).length;

    while(N<=Math.min(4, inputSize))
    {
      let ngrams = getNgrams(s, N).values();        //Converting hashset of ngrams into array os ngrams
      
      for(let i = 0; i< ngrams.length; i++){
          word = stemmer(ngrams[i].toLowerCase());
          if(profaneDict.hasOwnProperty(word))           // profaneStemmed is from stemmer.js--->dictionary.js
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
function getNgrams(inputSentence, N){
  let words = inputSentence.split(/\s+/);
  let ngramHashSet = new HashSet();
  let len = words.length;

  for(let currentIndex = 0; currentIndex<= len-N; currentIndex++){
    let stringBuilder  = words[currentIndex] ;
    for(let next = currentIndex+1; next-currentIndex<N;next++){
        // stringBuilder.append("_").append(words[next]);
        stringBuilder+= "_"  + words[next] ;
    }
    var ngramHashSetValue = stringBuilder;
    ngramHashSet.add(ngramHashSetValue);
  }
return ngramHashSet;
}