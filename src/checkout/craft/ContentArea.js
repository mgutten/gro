import React, {Component} from 'react';
import { connect } from 'react-redux';
import store from '../../store';
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
      'Volume',
      'Color Protection',
      'Dandruff',
      'Anti-frizz',
      'Shine'
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
      'Essential oils',
      'Regular'
    ],
    type: 'single',
    nextUrl: '/checkout/craft/email'
  }
};

class ContentArea extends Component {

  updateProgressBar() {
    store.dispatch({
      type: 'UPDATE_PROGRESS',
      step: 'craft',
      stepTitle: 'Craft your perfect bottle'
    });
  }

  componentWillMount() {
    this.updateProgressBar();
  }

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
