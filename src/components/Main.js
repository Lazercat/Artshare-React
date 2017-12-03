import React, { Component } from 'react';
import Sharewall from './Sharewall.js';
import Post from './Post.js';
import Artist from './Artist.js';
import NotFound from './NotFound.js';
import ViewArtwork from './ViewArtwork.js';
import Documentation from './Documentation.js';
import firebase from 'firebase';
import { auth, provider } from '../utils/facebook-auth.js';
import Header from './Header.js';
import '../App.css';
import '../styles/Main.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
      currentUser:  this.props.currentUser,
      artworkId: {},
    }

    this.getArtworkData = this.getArtworkData.bind(this);
    this.getLoginClick = this.getLoginClick.bind(this);
  }

async componentWillMount() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
          this.setState({ currentUser: user});
       } else { this.setState({ currentUser: null});
    }
  }.bind(this));
}


getArtworkData(data){
  this.setState({
    artworkId: data,
  });
}

getLoginClick(){
  const result = auth().signInWithRedirect(provider)
  this.setState({currentUser: result.user});
  console.log(this.state.currentUser + "I am user!");
}

getLogoutClick() {
   auth().signOut();
}

  render() {
    return (
    <Router>
      <div className="main">
        <div className="header-wrap">
          <Header currentUser={ this.state.currentUser } getLoginClick={ this.getLoginClick } getLogoutClick={ this.getLogoutClick } />
        </div>
        <div className="main-content-wrap">
          <Switch>
            <Route exact path="/" component={Sharewall} />
            <Route path="/artwork/:id" render={props => <ViewArtwork currentUser={this.state.currentUser} {...props} />} />
            <Route path="/artist/:id" render={props => <Artist currentUser={this.state.currentUser} {...props} />} />
            <Route path="/post" render={props => <Post currentUser={this.state.currentUser}  getLoginClick={ this.getLoginClick }  {...props} />} />
            <Route path="/documentation" component={Documentation} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
    );
  }
}

export default Main;
