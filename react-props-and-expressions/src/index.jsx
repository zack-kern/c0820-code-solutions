import React from 'react';
import ReactDOM from 'react-dom';
function CustomButton(props) {
  return <button>{props.text}</button>;
}
const myVeryValidReactElement = (
  <div>
    <CustomButton text="I'm" />
    <CustomButton text="Starting" />
    <CustomButton text="To" />
    <CustomButton text="Grasp" />
    <CustomButton text="React...!! xd" />
  </div>
);
ReactDOM.render(
  myVeryValidReactElement,
  document.getElementById('root')
);
