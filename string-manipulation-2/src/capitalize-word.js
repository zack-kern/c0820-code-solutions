/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  var newWord = word.toLowerCase().slice(1);
  var upWord = word.charAt(0).toUpperCase();
  newWord = upWord + newWord;
  if (newWord === 'Javascript') {
    newWord = 'JavaScript';
  }
  return newWord;
}
