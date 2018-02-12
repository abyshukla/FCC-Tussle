
function myReplace(str, before, after) {
  
  var firstChar ="";
  
  //if first character in 'before' is uppercase, change after accordingly
  
  if(before.charCodeAt(0)<97){
    firstChar = after.charCodeAt(0)-32;
    firstChar=String.fromCharCode(firstChar);
    after=firstChar+after.substr(1);
  }
  
  return str.replace(before, after);
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
