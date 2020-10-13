/* eslint-disable no-unused-vars */
function truncate(length, string) {
  var myStr = '';
  if (length >= string.length) {
    myStr = string + '...';
  } else {
    for (var i = 0; i < length; i++) {
      myStr += string[i];
      if (i === length - 1) {
        myStr += '...';
      }
    }
  }
  return myStr;
}
