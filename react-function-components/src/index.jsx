import React from 'react';
import ReactDOM from 'react-dom';
const root = document.querySelector('#root');
function CustomButton(props) {
  return <button>Click Me!!</button>;
}
const ele = <CustomButton />;
ReactDOM.render(ele, root);
