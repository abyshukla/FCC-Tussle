function addTogether() {
	var argCount = Array.from(arguments);
	var sum = 0;
  
  //check if valid integer
	function checkInt(a) {
		if (typeof a !== 'number') {
			return undefined;
		} else {
			return a;
		}
	}

	//check if only one arg passed
  if (argCount.length < 2) {
		
    //check if passed arg is valid int, return undefined if not
    if (checkInt(argCount[0])) {
    
			//if int valid return a function which accepts 1 extra argument and returns sum if the extra arg is valid
      return function(extraArg) {
        if (checkInt(extraArg)) {
          return argCount[0] + extraArg;
				} else {
					return undefined;
				}
			};
		} else {
			return undefined;
		}
	} else {
		//if two args are passed, check their validity and return their sum
    if (checkInt(argCount[0]) && checkInt(argCount[1])) {
			return argCount[0] + argCount[1];
		} else {
			return undefined;
		}
	}
	return sum;
}

addTogether(2)([3]);
