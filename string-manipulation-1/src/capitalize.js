/* eslint-disable no-unused-vars */
function capitalize(word) {
  var lowerWord;
  lowerWord = word.toLowerCase();
  lowerWord = lowerWord.slice(1);
  var upperWord = word[0].toUpperCase();
  word = upperWord + lowerWord;
  return word;
}
