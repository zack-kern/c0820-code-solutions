/* eslint-disable no-unused-vars */
function getValues(object) {
  const arr = [];
  for (const property in object) {
    arr.push(object[property]);
  }
  return arr;
}
