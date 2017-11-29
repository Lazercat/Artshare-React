import React, { Component } from 'react';
import './App.css';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import firebase from 'firebase';
import { auth, provider } from './utils/facebook-auth.js';


class App extends Component {
constructor(props){
  super(props);

  this.state = {
    currentuser: null,
  }
}

async componentWillMount() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) { this.setState({ currentUser: user, loggedIn: "true" });
       } else { this.setState({ currentUser: null, loggedIn: "false" });
    }
  }.bind(this));
}

async login() {
  const result = await auth().signInWithPopup(provider)
  this.setState({currentUser: result.user});
}

logout() {
 const result=  auth().signOut()
  this.setState({user: null});
}

  render() {
    return (
      <div className="App">
        <Main currentUser={ this.state.currentUser }/>
        <Footer />
      </div>
    );
  }
}

export default App;
