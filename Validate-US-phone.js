function telephoneCheck(str) {
  /*
  * 1 should be in the beginning (^1). This group may also have a whitespace(\s), hyphen (\-), opening paranthesis(\()
  * next group must be a 3 digit set(\d{3}), which may be enclosed by a paranthesis, followed by \s or \-
  * a 3 digit set followed by \s\-
  * a 4 digit set in the end of string \d{4}$
  */
   var regex = /^(1[\s\-\(]?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return regex.test(str);
}
telephoneCheck("1 555-555-5555");
