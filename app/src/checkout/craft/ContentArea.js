import React, {Component} from 'react';
import { connect } from 'react-redux'
import Question from './Question.js';

const craftOrder = [
  {
    id: 'moisture',
    question: "What's your hair type?",
    answers: [
      'Dry',
      'Normal',
      'Oily'
    ],
    type: 'single'
  },
  {
    id: 'boosts',
    question: "What boosts do you want?",
    description: "Choose up to three",
    answers: [
      'Growth',
      'Color Protection',
      'Dandruff',
      'Anti-frizz',
      'Other'
    ],
    type: 'multi'
  },
  {
    id: 'fragrance',
    question: "What fragrance would you like?",
    answers: [
      'Citrus',
      'Floral',
      'Other'
    ],
    type: 'single'
  }
];

class ContentArea extends Component {

  render() {
    let currentQuestion = craftOrder[this.props.craftIndex];
    let selected = this.props[currentQuestion.id] ? this.props[currentQuestion.id] : [];

    return (
      <section className="content-area container">
        <Question question={currentQuestion.question}
                  description={currentQuestion.description}
                  id={currentQuestion.id}
                  answers={currentQuestion.answers}
                  selected={selected}
                  type={currentQuestion.type}
                  next={this.props.next}
                  answerClick={this.props.answerClick} />
      </section>
    );
  }
}

let next = () => ({
  type: 'NEXT_STEP'
})

let answerClick = function(selected, question, value) {
  return {
    type: 'TOGGLE_ANSWER',
    selected: selected,
    question: question,
    value: value
  }
}

let mapStateToProps = state => ({
  craftIndex: state.checkout.craftIndex,
  moisture: state.checkout.moisture,
  fragrance: state.checkout.fragrance,
  boosts: state.checkout.boosts
})

let mapDispatchToProps = dispatch => ({
  next: () => dispatch(next()),
  answerClick: (selected, question, value) => {
    dispatch(answerClick(selected, question, value));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentArea);
