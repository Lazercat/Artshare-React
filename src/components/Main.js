import React, { Component } from 'react';
import Sharewall from './Sharewall.js';
import Login from './Login.js';
import Post from './Post.js';
import MyArt from './MyArt.js'
import NotFound from './NotFound.js';
import ViewArtwork from './ViewArtwork.js';
import Header from './Header.js';
import '../App.css';
import '../styles/Main.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
      user: null,
      artworkId: {},
    }
    this.getArtworkData = this.getArtworkData.bind(this);
  }

getArtworkData(data){
  this.setState({
    artworkId: data,
  });
}

  render() {
    return (
    <Router>
      <div className="main">
            <div className="header-wrap">
              <Header />
            </div>
            <div className="main-content-wrap">

              <Switch>
                <Route path='/login' component={Login} />
                <Route path="/post" component={Post} />
                <Route path="/myart" component={MyArt} />
                <Route exact path="/" component={Sharewall} />
                <Route path="/artwork/:id" component={ViewArtwork} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
    </Router>
    );
  }
}

export default Main;
