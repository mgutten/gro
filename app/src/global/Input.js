import React, { Component } from 'react';
import './css/input.css';

class Input extends Component {

  render() {
    const _onChange = this.props.onChange;

    return (
      <input
        type={this.props.type}
        onChange={(e) => _onChange(e.target.value)}
        value={this.props.default}
        placeholder={this.props.placeholder}
        className={this.props.className}
        />
    );
  }
}

export default Input;
