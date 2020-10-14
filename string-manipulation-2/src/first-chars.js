/* eslint-disable no-unused-vars */
function firstChars(length, string) {
  var word = '';
  if (length >= string.length) {
    return string;
  } else {
    for (var i = 0; i < length; i++) {
      word += string[i];
    }
    return word;
  }
}
