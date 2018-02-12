
function translatePigLatin(str) {
  var vowelArr = ['a','e','i','o','u'];
  var consCluster = "";
  if(vowelArr.indexOf(str[0])!=-1){
    console.log(vowelArr);
    return str+='way';
  }else{
    for(var i=0;i<str.length;i++){
    console.log(consCluster, vowelArr.indexOf(str[i]));
      if(vowelArr.indexOf(str[i])==-1){
        consCluster+=str[i];
      }else{
        return str.substr(consCluster.length)+consCluster+'ay';
      }
    }
  }
  return str;
}

translatePigLatin("consonant");
