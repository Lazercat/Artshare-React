import React, { Component } from 'react';
import '../styles/Navbar.css';
import App from '../App.js';
import Post from '../Post.js';
import MyArt from '../MyArt.js';
import Search from '../Search.js';
import NotFound from '../NotFound.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
<Router>
  <div className="Navbar">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <NavLink class="navbar-brand artShare-brand"  to="/">ArtShare</NavLink>{' '}
        </div>
        <ul class="nav navbar-nav">
          <li class="dropdown">
            <button class="dropdown-toggle" data-toggle="dropdown">User
            <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li><NavLink exact activeClassName="active-link" to="/post">Post Art!</NavLink>{' '}</li>
              <li><NavLink activeClassName="active-link" to="/myart">My Art!</NavLink>{' '}</li>
              <li><NavLink activeClassName="active-link" to="/search">Search Art!</NavLink>{' '}</li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
     <Switch>
      <Route exact path="/" component={App} />
      <Route path="/post" component={Post} />
      <Route path="/myart" component={MyArt} />
      <Route path="/search" component={Search} />
      <Route path="*" component={NotFound} />
    </Switch>
  </div>
</Router>

    );
  }
}

export default Navbar;
