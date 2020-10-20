/* eslint-disable no-unused-vars */
function includes(array, value) {
  var check = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      check = true;
    }
  }
  return check;
}
