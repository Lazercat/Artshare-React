import React, { Component } from 'react';
import './App.css';
import Sharewall from './components/Sharewall.js';
import Welcome from './components/Welcome.js';
import Post from './components/Post.js';
import MyArt from './components/MyArt.js'
import NotFound from './components/NotFound.js';
import Header from './components/Header.js';
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

          <div>
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
