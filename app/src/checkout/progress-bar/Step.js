import React, { Component } from 'react';
import './css/step.css';

class Step extends Component {

  inverseArrow() {
    if (this.props.step === '1') return false;

    return <div className="progress-arrow w-embed">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="26px" viewBox="0 0 15 26" enableBackground="new 0 0 15 26" xmlSpace="preserve">
              <path d="M-2.503-3.812V30.25h20.625V-3.812H-2.503z M-0.156,25.898L-0.034,0L15,12.949L-0.156,25.898z" fill="#f2eae1"></path>
             </svg>
           </div>
  };

  rightArrow() {
    if (this.props.step === '4') return false;

    return <div className="progress-arrow w-embed">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="26px" viewBox="0 0 15 26" enableBackground="new 0 0 15 26" xmlSpace="preserve">
              <polygon points="0,0 0,26 15,13 " fill="#f2eae1">
              </polygon>
            </svg>
          </div>
  };

  getStepClass() {
    let className = 'progress-step w-clearfix';
    if (this.props.step === '1') className += ' first';
    if (this.isActive()) className += ' active';
    return className;
  };

  isActive() {
    return this.props.selected;
  };

  render() {
    return (
      <div className="progress-container w-clearfix">
        <div className={this.getStepClass()}>
          {this.inverseArrow()}
          <div className="progress-text">{this.props.title}</div>
          {this.rightArrow()}
        </div>
      </div>
    );
  }
}

export default Step;
