
function repeatStringNumTimes(str, num) {
  // Initialize a new blank string
  var concatString="";
  //return empty string if num is negative
  if(num<0){
    return "";
  }
  else{
  //concatenate str num times
    for (var i=0; i<num;i++){
      concatString=concatString.concat(str);
    }
    return concatString;
  }
}
repeatStringNumTimes("abc", 3);
