import React, {Component} from 'react';
import Question from './craft/Question.js';

class ContentArea extends Component {
  getContentComponent() {
    return <Question name="hairType" />;
  };

  render() {
    return (
      <section className="content-area container">
        {this.getContentComponent()}
      </section>
    );
  }
}

export default ContentArea;
