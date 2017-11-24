import React, { Component } from 'react';
import './App.css';


class Search extends Component {

constructor(props){
  super(props);
  this.state = {
    user: null,

  }
}
render() {
    return (
      <div className="myArt">
         <Header/>
          <div>
            <h1> Hi i am your Search yo  </h1>
          </div>
         <Footer />
      </div>
    );
  }
}

export default Search;
