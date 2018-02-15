function binaryAgent(str) {
	
  //split string into arrays
  str = str.split(' ');
	var binToDec = 0;
	var tempArr = [];
	
  //loop through each array element
  for (var i = 0; i < str.length; i++) {
    binToDec = 0;
    
    //loop through letters of array 'words'
		for (var j = str[i].length - 1, pow=0; j >= 0, pow<str[i].length-1; j--, pow++) {
    
      //binary to decimal
			binToDec += Math.pow(2, pow) * str[i][j];
		}
    //Treat decimal numbers as ASCII codes, convert them to letters and push the letters in an array
		tempArr.push(String.fromCharCode(binToDec));
	}
  //join the array elements to create a string.
	return tempArr.join("");
}

binaryAgent(
	'01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
);
