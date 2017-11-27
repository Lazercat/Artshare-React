import React, { Component } from 'react';
import '../App.css';
import '../styles/Header.css'
import '../styles/Main.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

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
         <h1 className="App-title">Welcome to Artshare: Share your art online!</h1>
       </header>
       <div className="Navbar">
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <NavLink className="navbar-brand artShare-brand" exact to="/">ArtShare</NavLink>{' '}
                </div>
                <ul className="nav navbar-nav">
                  <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown">User
                    <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        <div>
                         <li><NavLink className="contact-link" activeClassName="green" to="/login">Login</NavLink>{' '}</li>
                         <li><NavLink activeClassName="green" to="/post">Post Art</NavLink>{' '}</li>
                         <li><NavLink activeClassName="green" to="/myart">My Art</NavLink>{' '}</li>
                        </div>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>


      </div>
    );
  }
}

export default Header;
