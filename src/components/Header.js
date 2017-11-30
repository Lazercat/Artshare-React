import React, { Component } from 'react';
import '../App.css';
import '../styles/Header.css'
import '../styles/Main.css';
import {
  Link,
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

componentDidMount(){
  console.log(this.state.currentUser);
}

render() {
  let confirmSubmit;
  let handleLogin;
  let handleLogout;
  const { result, processing } = this.state;
  const {currentUser} = this.state;


  if (this.props.currentUser === null || this.props.currentUser  === undefined){

  return(
    <div className="Header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <img src="/color-star-3-217610/color-star-3-48-217610.png" className="App-logo" alt="logo" width="48" height="48" alt="" />
          <Link className="navbar-brand artShare-brand"  to="/">ArtShare(beta)</Link>{' '}
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/post">Post Art</Link>{' '}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">View Art</Link>{' '}
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/documentation">About ArtShare</Link>{' '}
            </li>
            <li className="nav-item profile-item">
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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <div className="navbar-brand" href="#">
          <Link to="/"> <img src="/color-star-3-217610/color-star-3-64-217610.png" className="App-logo" alt="logo" /></Link>
          <Link className="navbar-brand artShare-brand" exact to="/">ArtShare(beta)</Link>{' '}
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/post">Post Art</Link>{' '}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">View Art</Link>{' '}
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/documentation">About ArtShare</Link>{' '}
            </li>
            <li className="nav-item profile-item">
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
