/* eslint-disable no-unused-vars */
function drop(array, count) {
  var newArr = [];
  if (array.length === 0) {
    return newArr;
  } else {
    for (var i = count; i < array.length; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  }
}
