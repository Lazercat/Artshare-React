import React, { Component } from 'react';
import '../App.css';

class MyArt extends Component {

constructor(props){
  super(props);
  this.state = {
    user: null,
  }
}
  render() {
    return (
      <div className="myArt">

          <div>
            <h1> Hi i am your art. it's so pretty! </h1>
          </div>

      </div>
    );
  }
}

export default MyArt;
