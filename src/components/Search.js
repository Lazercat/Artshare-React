import React, { Component } from 'react';
import './App.css';


class Search extends Component {

constructor(props){
  super(props);
  this.state = {
    currentUser: null,
  }
}
render() {
    return (
      <div className="Search">
            <h1>Hi i am your Search yo</h1>
      </div>

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















    );
  }
}

export default Search;
