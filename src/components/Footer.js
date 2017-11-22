import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer className="w3-row-padding w3-padding-32">
          <div className="w3-third">
            <h3>FOOTER</h3>
            <p>Section one</p>
            <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
          </div>

          <div className="w3-third">
           <h3>Stuffs</h3>
           <p>Section two</p>
          </div>

          <div className="w3-third w3-serif">
            <h3></h3>
            <p>Section three</p>
              <span className="w3-tag w3-black w3-margin-bottom">Travel</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">New York</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Dinner</span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Salmon</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">France</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Drinks</span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Ideas</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Flavors</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Cuisine</span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Chicken</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Dressing</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Fried</span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Fish</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Duck</span>

          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
