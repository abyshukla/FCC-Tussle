function convertHTML(str) {
//create an object containing special chars specified by the challenge
  var specialCharObj = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };
  var newStr = '';
  //create a new string with mutated special characters
  for (var i = 0; i < str.length; i++) {
    if (specialCharObj.hasOwnProperty(str[i])) {
      newStr += specialCharObj[str[i]];
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

convertHTML('Dolce & Gabbana');
