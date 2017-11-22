import React, { Component } from 'react';
import '../App.css';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <h1>Welcome</h1>
        <p> Please login to continue. </p>
        <button>Login</button>
      </div>
    );
  }
}

export default Welcome;
