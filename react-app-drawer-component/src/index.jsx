import React from 'react';
import ReactDOM from 'react-dom';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.state = { clickCheck: false, menuCheck: false };
  }

  handleClick() {
    this.setState({ clickCheck: true });
  }

  handleMenu() {
    this.setState({ menuCheck: true, clickCheck: false });
  }

  render() {
    if (this.state.clickCheck) {
      return (
        <div className="container">
          <div className="menu">
            <button className="btn" onClick={this.handleMenu}>
              <h1>Menu</h1>
            </button>
            <button className="btn" onClick={this.handleMenu}>
              <h3>About</h3>
            </button>
            <button className="btn" onClick={this.handleMenu}>
              <h3>Get Started</h3>
            </button>
            <button className="btn" onClick={this.handleMenu}>
              <h3>Sign In</h3>
            </button>
          </div>
          <div className="shade"></div>
        </div>
      );
    } else if (this.state.handleMenu) {
      return (
        <button className="btn" onClick={this.handleClick}>
          <i className="fas fa-bars"></i>
        </button>
      );
    }
    return (
      <button className="btn" onClick={this.handleClick}>
        <i className="fas fa-bars"></i>
      </button>
    );
  }
}

ReactDOM.render(
  <AppDrawer />,
  document.querySelector('#root')
);
