import React, { Component } from 'react';
import Step from './Step.js';

class ProgressBar extends Component {
  render() {
    const steps = [
      'craft',
      'delivery',
      'payment',
      'thank you'
    ];

    return (
      <div className="container">
        {
          steps.map((title, index) => <Step title={title} step={(index + 1).toString()} key={index} />)
        }
      </div>
    );
  }
}

export default ProgressBar;
