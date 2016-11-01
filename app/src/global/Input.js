import React, { Component } from 'react';
import './css/input.css';

class Input extends Component {

  render() {
    const _onChange = this.props.onChange;
    console.log(this.props.default);

    return (
      <input
        type={this.props.type}
        onChange={(e) => _onChange(e.target.value)}
        value={this.props.default}
        placeholder={this.props.placeholder}
        />
    );
  }
}

export default Input;
