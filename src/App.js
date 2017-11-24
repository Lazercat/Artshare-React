import React, { Component } from 'react';
import './App.css';
import Main from './components/Main.js';
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
         <Main />
         <Footer />
      </div>
    );
  }
}

export default App;
