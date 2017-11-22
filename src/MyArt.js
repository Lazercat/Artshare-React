import React, { Component } from 'react';

import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

class MyArt extends Component {

constructor(props){
  super(props);
  this.state = {
    user: null,

  }
}
  render() {
    return (
      <div className="myArt">
         <Header/>
          <div>

            <h1> Hi i am your art. it's so pretty! </h1>


          </div>
         <Footer />
      </div>
    );
  }
}

export default MyArt;
