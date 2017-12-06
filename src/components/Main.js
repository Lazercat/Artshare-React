import React, { Component } from 'react';
import Sharewall from './Sharewall.js';
import Post from './Post.js';
import Artist from './Artist.js';
import NotFound from './NotFound.js';
import ViewArtwork from './ViewArtwork.js';
import Documentation from './Documentation.js';
import axios from 'axios';
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
      currentUser: null,
      mongoUser: {},
      artworkId: {},
    }

    this.getArtworkData = this.getArtworkData.bind(this);
    this.getLoginClick = this.getLoginClick.bind(this);
    this.requestMongoAcct = this.requestMongoAcct.bind(this);
  }

async componentWillMount() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      this.setState({ currentUser: user});

           //Get Firebase User from Mongo or create them in Mongo
           axios.get('https://artshare-api.herokuapp.com/user/'+this.state.currentUser.providerData[0].uid)
            .then( (result) => {

                  if(result.data.length>0){  //put found mongo user into state
                    this.setState({mongoUser: result.data,});

                  } else { // TODO: figure out how to prepare a post user request
                     this.setState({mongoUser: {},});
                     console.log(JSON.stringify(this.state.mongoUser)+" null mongo user");
                     //fire off create user function
                     this.requestMongoAcct();
                  }
            })
            .catch(function (error) {
              console.log("catch error from axios get this user" +error);
            });

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
  // console.log(this.state.currentUser + "I am user!");
}

getLogoutClick() {
   auth().signOut();
}

requestMongoAcct(){
  // console.log("I am currentUser.displayName" +this.state.currentUser.displayName);
  // console.log("I am currentUser.email" +this.state.currentUser.email);
  // console.log("I am currentUser.facebookid" +this.state.currentUser.providerData[0].uid);
  // console.log("I am currentUser.firebaseid" +this.state.currentUser.uid);
  // console.log("I am currentUser.profilePhoto" +this.state.currentUser.photoURL);

  fetch( 'https://artshare-api.herokuapp.com/user', {
    method: 'post',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      displayName: this.state.currentUser.displayName,
      email: this.state.currentUser.email,
      facebookId: this.state.currentUser.providerData[0].uid,
      firebaseId: this.state.currentUser.uid,
      profilePhoto: this.state.currentUser.photoURL,
    }),
  })
  .then(response => response.json()
  .then(result => {
      if (response.status >= 200 && response.status < 300) {
         console.log("successful add of user to mongodb");
      } else {
          const error = new Error(response.statusText);
          error.response = response;
          console.log(error);
          throw error;
      }

    }))
  .catch(error => { console.log('request failed', error); })
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
            <Route exact path="/" render={props => <Sharewall currentUser={this.state.currentUser} {...props} />} />
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
