import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer className="w3-row-padding w3-padding-32">
          <div className="w3-third">
            <h3>FOOTER</h3>
            <p>Copyright 2017 Jesse Lewis.  All Rights Reserved.</p>
            <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noopener noreferrer">w3.css</a></p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
