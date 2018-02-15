function truthCheck(collection, pre) {
	// Is everyone being true?
	var truthCheckFlag = 0;
	for (var i = 0; i < collection.length; i++) {
  
    //check if collection has a property 'pre' and the value of that property is true
		if (collection[i].hasOwnProperty(pre) && collection[i][pre]) {
			truthCheckFlag++;
		}
	}
	return truthCheckFlag == collection.length;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
