const myBookArr = [
  {
    isbn: '1234',
    title: 'To Kill A MockingBird',
    author: 'Harper Lee'
  },
  {
    isbn: '5678',
    title: 'Not a Creative',
    author: 'Hee Larper'
  },
  {
    isbn: '9101',
    title: 'Im Serious',
    author: 'Perlar Eeh'
  }
];
console.log('myBookArr: ', myBookArr);
console.log('typeof myBookArr: ', typeof (myBookArr));
var myBookArrJSON = JSON.stringify(myBookArr);
console.log('myBookArrJSON: ', myBookArrJSON);
console.log('typeof myBookArrJSON: ', typeof (myBookArrJSON));
var student = '{"name":"5678","id":"Zack"}';
console.log('student: ', student);
console.log('typeof student: ', typeof (student));
var studentJSON = JSON.parse(student);
console.log('studentJSON: ', studentJSON);
console.log('typeof studentJSON: ', typeof (studentJSON));
