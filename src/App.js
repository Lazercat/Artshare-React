import React, { Component } from 'react';

import './App.css';
import Header from './components/Header.js';
import Sharewall from './components/Sharewall.js';
import Welcome from './components/Welcome.js';
import Footer from './components/Footer.js';


class App extends Component {

constructor(props){
  super(props);

  this.state = {
    user: null,

  }
}
  render() {
    return (
      <div className="App">
         <Header/>
         <Welcome />
         <Sharewall />
         <Footer />
      </div>
    );
  }
}

export default App;
