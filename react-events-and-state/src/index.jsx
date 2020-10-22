import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    let but;
    if (this.state.isClicked) {
      but = <button>Proud of u for clicking</button>;
      return but;
    }
    but = <button onClick={this.handleClick}>Click da button</button>;
    return but;
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
