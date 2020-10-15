const express = require('express');
const app = express();
const myPort = 3000;
var myArr = [
  {
    id: 1,
    name: 'Mr. T',
    course: 'WoW',
    grade: '9001'
  }, {
    id: 2,
    name: 'Georgi Ragotoni',
    course: 'Scootering',
    grade: '73'
  }, {
    id: 3,
    name: 'Bella Cullen',
    course: 'Vampireing',
    grade: '-10'
  }
];

app.get('/', (req, res) => res.json(myArr));
app.delete('/api/grades/:id', (req, res) => {
  delete myArr[req.params.id - 1];
  var filteredArr = myArr.filter(el => {
    return el !== null;
  });
  res.status(204);
  res.json(filteredArr);
  myArr = filteredArr;
});
// eslint-disable-next-line no-console
app.listen(myPort, () => console.log(`listening at http://localhost:${myPort}`));
