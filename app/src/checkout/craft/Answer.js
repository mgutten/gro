import React, { Component } from 'react';

class Answer extends Component {

  render() {
    return (
      <a className="answer-btn w-button" href="#">{this.props.value}</a>
    );
  }
}

export default Answer;
