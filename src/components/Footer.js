import React, { Component } from 'react';
import '../App.css';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer className="row">
          <p>Made with love by <a href="http://www.jesselewis.work">Jesse Lewis</a> @ General Assembly, Austin, TX. </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
