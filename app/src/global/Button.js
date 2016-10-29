import React, { Component } from 'react';
import './css/button.css';

class Button extends Component {
  render() {
    return (
      <button
        className="button w-clearfix"
        href="#"
        disabled>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
