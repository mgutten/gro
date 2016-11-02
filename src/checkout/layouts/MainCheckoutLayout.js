import React, { Component } from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';

class MainCheckoutLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default MainCheckoutLayout;
