import React, {Component} from 'react';
import { connect } from 'react-redux'
import Question from './Question.js';

const craftOrder = {
  moisture: {
    id: 'moisture',
    question: "What's your hair type?",
    answers: [
      'Dry',
      'Normal',
      'Oily'
    ],
    type: 'single',
    nextUrl: '/checkout/craft/boosts'
  },
  boosts: {
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
    type: 'multi',
    nextUrl: '/checkout/craft/fragrance'
  },
  fragrance: {
    id: 'fragrance',
    question: "What fragrance would you like?",
    answers: [
      'Citrus',
      'Floral',
      'Other'
    ],
    type: 'single',
    nextUrl: '/checkout/delivery'
  }
};

class ContentArea extends Component {

  render() {
    let currentQuestion = craftOrder[this.props.params.question];
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
                  nextUrl={currentQuestion.nextUrl}
                  answerClick={this.props.answerClick} />
      </section>
    );
  }
}

let next = (url) => ({
  type: 'NEXT_STEP',
  url: url
})

let answerClick = function(selected, question, value, allowMultiple) {
  return {
    type: 'TOGGLE_ANSWER',
    selected: selected,
    question: question,
    value: value,
    allowMultiple: allowMultiple
  }
}

let mapStateToProps = state => ({
  moisture: state.user.moisture,
  fragrance: state.user.fragrance,
  boosts: state.user.boosts
})

let mapDispatchToProps = dispatch => ({
  next: (url) => dispatch(next(url)),
  answerClick: (selected, question, value, allowMultiple) => {
    dispatch(answerClick(selected, question, value, allowMultiple));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentArea);
