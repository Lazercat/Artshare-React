import React, { Component } from 'react';
import '../App.css';
import '../styles/Header.css'
import '../styles/Main.css';
import {
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom';

class Header extends Component {
  constructor(props){
   super(props);

      this.state = {
        currentUser: this.props.currentUser,
      }
  }


handleLogin(evt){
  evt.preventDefault();
  this.props.getLoginClick();
}

handleLogout(evt){
  evt.preventDefault();
  this.props.getLogoutClick();
}

render() {
  let confirmSubmit;
  let handleLogin;
  let handleLogout;
  let getLoginClick;
  let getLogoutClick;
  const { result, processing } = this.state;
  const {currentUser} = this.state;


  if (this.props.currentUser === null || this.props.currentUser  === undefined){

  return(
    <div className="Header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/color-star-3-217610/color-star-3-48-217610.png" className="App-logo" alt="logo" width="48" height="48" alt="" />
          <NavLink className="navbar-brand artShare-brand" exact to="/">ArtShare</NavLink>{' '}
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
               <NavLink className="nav-link" to="/post">Post Art</NavLink>{' '}
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/">View Art</NavLink>{' '}
            </li>
            <li class="nav-item">
              <NavLink className="nav-link"  to="/documentation">About ArtShare</NavLink>{' '}
            </li>
            <li class="nav-item profile-item">
             <a href="#" className="nav-link logout" onClick={ this.handleLogin.bind(this) } >Facebook Login</a>{' '}
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  )


  } else if(this.props.currentUser){
    return (
   <div className="Header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/color-star-3-217610/color-star-3-48-217610.png" className="App-logo" alt="logo" width="48" height="48" alt="" />
          <NavLink className="navbar-brand artShare-brand" exact to="/">ArtShare</NavLink>{' '}
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
               <NavLink className="nav-link" to="/post">Post Art</NavLink>{' '}
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/">View Art</NavLink>{' '}
            </li>
            <li class="nav-item">
              <NavLink className="nav-link"  to="/documentation">About ArtShare</NavLink>{' '}
            </li>
            <li class="nav-item profile-item">
             <img src={ this.props.currentUser.photoURL } className="profile-pic" alt={this.props.currentUser.displayName} />
             <a href="#" className="nav-link logout" onClick={ this.handleLogout.bind(this)}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>

    );}
  }
}

export default Header;
