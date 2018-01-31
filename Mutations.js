
function mutation(arr) {
  //save array elements as string
  var firstStr = arr[0];
  var secondStr = arr[1];
  //convert first string to lowercase and search for second string's letters (in lowercase)
  for(var i=0; i<secondStr.length; i++){
    if(firstStr.toLowerCase().indexOf(secondStr[i].toLowerCase())==-1)
    return false;
  }
  return true;
}

mutation(["hello", "hello"]);
