/* eslint-disable no-console */
var curCount = 3;
var myStart = setInterval(start, 1000);
function start() {
  console.log(curCount);
  curCount--;
  if (curCount === 0) {
    clearInterval(myStart);
    console.log('BLASTIN OFF!!');
  }
}
