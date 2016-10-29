import React, {Component} from 'react';
import Question from './Question.js';

class ContentArea extends Component {
  getContentComponent() {
    return <Question name="moisture" />;
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
