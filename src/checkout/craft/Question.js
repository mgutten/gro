import React, { Component } from 'react';
import Answer from './Answer';
import Button from '../../global/Button';

class Question extends Component {

  toggleAnswer(selected, value) {
    this.props.answerClick(selected, this.props.id, value, this.allowMultiple())
  }

  next() {
    this.props.next(this.props.nextUrl);
  }

  allowMultiple() {
    return this.props.type === 'multi';
  }

  disabled() {
    return this.props.selected.constructor === Array
      ? this.props.selected.length <= 0
      : !this.props.selected;
  }

  description() {
    if (!this.props.description)
      return '';

    return <h4>{this.props.description}</h4>;
  }

  render() {
    let selected = value => this.props.selected.includes(value);

    return (
      <div className="question-container">
        <h2 className="checkout question">{this.props.question}</h2>
        {this.description()}
        <div className="answer-container">
          {this.props.answers.map((value) => <Answer  value={value}
                                                      key={value}
                                                      selected={selected(value)}
                                                      onClick={this.toggleAnswer.bind(this)} />
                                  )}
        </div>
        <Button text="Continue" submit={this.next.bind(this)} disabled={this.disabled()} />
      </div>
    );
  }
}

export default Question;
