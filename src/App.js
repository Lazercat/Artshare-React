/************************************
        ARTSHARE REACT
  Written and Owned by: Jesse Lewis
*************************************/

import React, { Component } from 'react';
import './App.css';
import Main from './components/Main.js';
import Footer from './components/Footer.js';


class App extends Component {

  render() {
    return (
      <div className="App">
         <MetaTags>
            <title>ArtShare</title>
            <meta property="og:image" content="//artshare-react.herokuapp.com/artshare-meta.png">
            <meta property="og:title" content="ArtShare: Share Your Art Globally!"/>
            <meta property="og:site_name" content="ArtShare"/>
            <meta property="og:url" content="https://artshare-react.herokuapp.com/">
            <meta property="og:description" content="ArtShare is a resource for artists to share their available artworks online. "/>
          </MetaTags>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
