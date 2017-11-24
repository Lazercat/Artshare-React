import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      showmenu: false,
    }
  }

  render() {

    return (
      <div className="Header">
       <header className="App-header">
         <img src="/artshare.png" className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to Artshare</h1>
       </header>
      </div>
    );
  }
}

export default Header;
