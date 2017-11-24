import React, { Component } from 'react';
import Sharewall from './Sharewall.js';
import Welcome from './Welcome.js';
import Post from './Post.js';
import MyArt from './MyArt.js'
import NotFound from './NotFound.js';
import Header from './Header.js';
import '../App.css';
import '../styles/Main.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
    <Router>
      <div className="main">
        <div className="header-wrap">
          <Header />
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
        <div className="main-content-wrap">
          <Switch>
            <Route exact path="/" component={Sharewall} />
            <Route path='/login' component={Welcome} />
            <Route path="/post" component={Post} />
            <Route path="/myart" component={MyArt} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
    );
  }
}

export default Main;
