
function findLongestWord(str) {
  str=str.split(' '); //string becomes an array
  var longWord=str[0]; //Consider first element as the longest word
  for(var i=1; i<str.length; i++){
    if(str[i].length>longWord.length){ //if another longer word found, longWord takes on its value
      longWord=str[i];
    }
  }
  return longWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
