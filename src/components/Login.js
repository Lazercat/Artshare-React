
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import '../App.css';
import '../styles/Login.css';

class Login extends React.Component {
  responseFacebook(response) {
    console.log(response)
  }

  render() {
    return (
    <div>
      <h1>Login could happen here</h1>
    </div>
    )
  }
}


export default Login;
