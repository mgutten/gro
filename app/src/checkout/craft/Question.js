import React, { Component } from 'react';
import Answer from './Answer';
import Button from '../../global/Button';

class Question extends Component {

  toggleAnswer(selected, value) {
    this.props.answerClick(selected, this.props.id, value)
  }

  disabled() {
    return this.props.selected.constructor === Array
      ? this.props.selected.length <= 0
      : !this.props.selected;
  }

  render() {
    let selected = value => this.props.selected.includes(value);

    return (
      <div>
        <h2 className="checkout question">{this.props.question}</h2>
        <div className="answer-container">
          {this.props.answers.map((value) => <Answer  value={value}
                                                      key={value}
                                                      selected={selected(value)}
                                                      onClick={this.toggleAnswer.bind(this)} />
                                  )}
        </div>
        <Button text="Continue" submit={this.props.next} disabled={this.disabled()} />
      </div>
    );
  }
}

export default Question;
