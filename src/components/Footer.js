import React, { Component } from 'react';
import '../App.css';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
          <p>Made with love by <a className="jesse" href="http://www.jesselewis.work" target="_blank">Jesse Lewis</a> @ General Assembly ATX. Copyright &copy; 2017, Jesse Lewis </p>
      </div>
    );
  }
}

export default Footer;

