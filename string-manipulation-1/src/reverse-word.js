/* eslint-disable no-unused-vars */
function reverseWord(word) {
  var newWord;
  for (var i = word.length; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord.substring(3);
}
