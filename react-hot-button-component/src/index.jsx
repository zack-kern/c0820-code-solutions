import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clickCount: 0 };
  }

  handleClick() {
    var count = this.state.clickCount;
    this.setState({ clickCount: count + 1 });
  }

  render() {
    const c = this.state.clickCount;
    if (c >= 3 && c < 6) {
      return <button className={'indigo'} onClick={this.handleClick}>Hot Button!</button>;
    } else if (c >= 6 && c < 9) {
      return <button className={'purple'} onClick={this.handleClick}>Hot Button!</button>;
    } else if (c >= 9 && c < 12) {
      return <button className={'red'} onClick={this.handleClick}>Hot Button!</button>;
    } else if (c >= 12 && c < 15) {
      return <button className={'orange'} onClick={this.handleClick}>Hot Button!</button>;
    } else if (c >= 15 && c < 18) {
      return <button className={'yellow'} onClick={this.handleClick}>Hot Button!</button>;
    } else if (c >= 18) {
      return <button className={'white'} onClick={this.handleClick}>Hot Button!</button>;
    } else {
      return <button className={'standard'} onClick={this.handleClick}>Hot Button!</button>;
    }
  }
}

ReactDOM.render(
  <HotButton />,
  document.querySelector('#root')
);
