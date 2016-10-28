import React, { Component } from 'react';
import ProgressBar from './progress-bar/ProgressBar.js';

class Header extends Component {
  render() {
    return (
      <section className="header">
        <div className="container">
          <h1 className="title">Craft your perfect shampoo</h1>
        </div>
        <ProgressBar />
      </section>
    );
  }
}

export default Header;
