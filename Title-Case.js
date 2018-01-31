
function titleCase(str) {
  str=str.split(" "); //convert string to array
  var newStr = str.map(function(eachStrElem){           //go through each word in the array
    eachStrElem = eachStrElem.toLowerCase().split("");  //convert each word to an array after changing to lowercase
    
     /*pop out first element of the array and convert it to upper case. eachStrElem array is now truncated. Concatenate the popped 
     out (and 'upper-cased') letter with the rest of the array. Join the result*/
     
    var TitleCaseWord = eachStrElem.shift().toUpperCase().concat(eachStrElem.join(""));
    return TitleCaseWord;
  }).join(" ");
  return newStr;
}

titleCase("I'm a little tea pot");
