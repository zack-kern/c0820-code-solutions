/* eslint-disable no-unused-vars */
function lastChars(length, string) {
  var word = '';
  var stringLength = string.length;
  if (length >= stringLength) {
    return string;
  } else {
    var myI = (stringLength - length);
    for (var i = myI; i < stringLength; i++) {
      var myString = string[i];
      word += myString;
    }
    return word;
  }
}
