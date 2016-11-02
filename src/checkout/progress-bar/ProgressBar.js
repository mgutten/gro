import React, { Component } from 'react';
import { connect } from 'react-redux';
import Step from './Step.js';

class ProgressBar extends Component {

  selected(title) {
    return this.props.step === title;
  }

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
          steps.map((title, index) => <Step title={title} step={(index + 1).toString()} key={index} selected={this.selected(title)} />)
        }
      </div>
    );
  }
}

let mapStateToProps = state => ({
  step: state.checkout.step
})

export default connect(mapStateToProps)(ProgressBar);
