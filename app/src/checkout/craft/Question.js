import React, { Component } from 'react';
import Answer from './Answer.js';
import Button from '../Button.js';

const questions = {
  hairType: {
    question: "What's your hair type?",
    answers: [
      'Dry',
      'Normal',
      'Oily'
    ]
  },
  type: 'single'
};

class Question extends Component {

  render() {
    const question = questions[this.props.name];

    return (
      <div>
        <h2 className="checkout question">{question.question}</h2>
        <div className="answer-container">
          {question.answers.map((value) => <Answer value={value} key={value} />)}
        </div>
        <Button text="Continue" />
      </div>
    );
  }
}

export default Question;
