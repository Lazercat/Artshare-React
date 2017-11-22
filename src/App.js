import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from 'components/Header.js';
import Sharewall from 'components/Sharewall.js';
import Welcome from 'components/Welcome.js';
import Footer from 'components/Footer.js';


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
         <div>
          <Footer/>
         </div>
      </div>
    );
  }
}

export default App;
