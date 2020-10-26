/* eslint-disable no-unused-vars */
function dropRight(array, count) {
  var newArr = [];
  if (array.length === 0) {
    return newArr;
  } else {
    for (var i = 0; i < array.length - count; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  }
}
