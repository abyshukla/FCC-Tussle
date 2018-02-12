function fearNotLetter(str) {
  var check = str.charCodeAt(0);
  var missing = '';
  str.split('').map(function(value, index) {
    console.log(index, value, check);
    if (str.charCodeAt(index) == check) {
      ++check;
      console.log("yes");
    } else {
      missing = String.fromCharCode(check);
    }
  });
  return missing;
}

fearNotLetter('abc');
