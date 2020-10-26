import React from 'react';
import ReactDOM from 'react-dom';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const len = this.state.value.length;
    if (len === 0) {
      return (
        <form>
          <label>
            <h2>Password</h2>
            <input type="password" value={this.state.value} onChange={this.handleChange} />
          </label>
          <i className="time fas fa-times"></i>
          <p>A password is required.</p>
        </form>
      );
    } else if (len < 8) {
      return (
        <form>
          <label>
            <h2>Password</h2>
            <input type="password" value={this.state.value} onChange={this.handleChange} />
          </label>
          <i className="time fas fa-times"></i>
          <p>Your password is too short.</p>
        </form>

      );
    }
    return (
      <form>
        <label>
          <h2>Password</h2>
          <input type="password" value={this.state.value} onChange={this.handleChange} />
        </label>
        <i className="check fas fa-check"></i>
      </form>
    );
  }
}
ReactDOM.render(
  <ValidatedInput />,
  document.querySelector('#root')
);
