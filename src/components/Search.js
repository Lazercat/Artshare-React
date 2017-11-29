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
    );
  }
}

export default Search;
