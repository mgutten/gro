import React, { Component } from 'react';
import './css/answer.css';

class Answer extends Component {

  handleClick (e) {
    e.preventDefault();
    this.props.onClick(this.props.selected, this.props.value)
  }

  render() {
    let classnames = 'answer-btn w-button';

    if (this.props.selected)
      classnames += ' active'

    return (
      <a className={classnames}
         href="#"
         onClick={this.handleClick.bind(this)}>
         {this.props.value}
      </a>
    );
  }
}

export default Answer;
