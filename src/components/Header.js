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
       <header className="App-header">
         <img src="/color-star-3-217610/color-star-3-64-217610.png" className="App-logo" alt="logo" />
         <h1 className="App-title">ArtShare: share your art!</h1>

       </header>
       <div className="navbar-xs">
            <nav className="navbar-static-top navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                 <div className="mobile-menu">
                  <NavLink className="navbar-brand artShare-brand" exact to="/">ArtShare</NavLink>{' '}
                 </div>
                </div>
                <ul className="nav navbar-nav">
                <li><NavLink activeStyle={{'color':'white'}} to="/post">Post Art</NavLink>{' '}</li>
                <li><NavLink activeClassName="white" to="/">View Art</NavLink>{' '}</li>
                <li><NavLink activeClassName="white" to="/documentation">About ArtShare</NavLink>{' '}</li>
                <li><a href="#" onClick={ this.handleLogin.bind(this) } >Facebook Login</a>{' '}</li>
                </ul>
              </div>
            </nav>
          </div>
      </div>
  )


  } else if(this.props.currentUser){
    return (
      <div className="Header">
       <header className="App-header">
         <img src="/color-star-3-217610/color-star-3-64-217610.png" className="App-logo" alt="logo" />
         <h1 className="App-title">ArtShare: share your art! </h1>
       </header>
       <div className="navbar-xs">
            <nav className="navbar-static-top navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <NavLink className="navbar-brand artShare-brand" exact to="/">ArtShare</NavLink>{' '}
                </div>
                <ul className="nav navbar-nav">
                <li><NavLink activeClassName="white" to="/post">Post Art</NavLink>{' '}</li>
                <li><NavLink activeClassName="white" to="/">View Art</NavLink>{' '}</li>
                <li><NavLink activeClassName="white" to="/documentation">About ArtShare</NavLink>{' '}</li>

                  <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown"> <img src={this.props.currentUser.photoURL} className="profile-pic" />{this.props.currentUser.displayName}
                    <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        <div>
                         <li><NavLink to="/post">Post Art</NavLink>{' '}</li>
                         <li><a href="#" onClick={ this.handleLogout.bind(this)}>Logout</a></li>
                        </div>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

      </div>
    );}
  }
}

export default Header;
