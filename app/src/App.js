import React, { Component } from 'react';
import Header from './checkout/Header.js';
import ContentArea from './checkout/ContentArea.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContentArea />
      </div>
    );
  }
}

export default App;
