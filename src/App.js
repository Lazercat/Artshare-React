/************************************
        ARTSHARE REACT
  Written and Owned by: Jesse Lewis
*************************************/

import React, { Component } from 'react';
import './App.css';
import Main from './components/Main.js';
import Footer from './components/Footer.js';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
