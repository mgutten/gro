import React, { Component } from 'react';
import Header from './checkout/Header.js';
import ContentArea from './checkout/ContentArea.js';
import Footer from './checkout/Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContentArea />
        <Footer />
      </div>
    );
  }
}

export default App;
