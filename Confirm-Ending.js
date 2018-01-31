
function confirmEnding(str, target) {

  //Extract a new string from the given string
  //The extracted string length is same as target string's length
  //in substr(), only the start is given (str.length-target.length)
  
  var newStr=str.substr(str.length-target.length);
  return newStr==target;
}

confirmEnding("Bastian", "n");
