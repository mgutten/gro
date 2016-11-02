import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBar from './progress-bar/ProgressBar.js';

class Header extends Component {
  render() {
    return (
      <section className="header">
        <div className="container">
          <h1 className="title">{this.props.stepTitle}</h1>
        </div>
        <ProgressBar />
      </section>
    );
  }
}

let mapStateToProps = state => ({
  stepTitle: state.checkout.stepTitle
})

export default connect(mapStateToProps)(Header);
