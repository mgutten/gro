import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="checkout footer-container">
        <div className="checkout footer-text">Handcrafted with love in San Francisco.</div>
      <a className="contact" href="mailto:team@trygro.com?subject=A%20Quick%20Question">Contact Us</a>
      </footer>
    );
  }
}

export default Footer;
