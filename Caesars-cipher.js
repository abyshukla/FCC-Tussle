
function rot13(str) { // LBH QVQ VG!
  
  var newString="";
  
  //a variable to hold each Char to number conversion during for loop
  var charToNum=0;
  
  //for loop traversing the string
  for(var i=0;i<str.length;i++){
    
    //converting each char to number
    charToNum=str.charCodeAt(i);
    
    // check if the char is between A-Z AND a-z (not a requirement, doing it because, why not!)
    if((charToNum>64 && charToNum<91) || (charToNum>96 && charToNum<123)){
      if((charToNum-13)<65 || (charToNum-13>90 && charToNum-13<97)){
        
        //if subtracting 13 from the char code throws the code beyond the range (A-Z AND a-z), add 26. Else don't.
        newString+=String.fromCharCode(str.charCodeAt(i)+13);
        }else{
        newString+=String.fromCharCode(str.charCodeAt(i)-13);
        }
      
      //if the char is anything other than a letter, leave it as it is.
      }else{
        newString+=str[i];
        }
    }
  return newString;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
