
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
      <div class="fb-login-button"
              appId={process.env.FACEBOOK_APP_ID}
              autoLoad={true}
              fields="name,email,picture"
             data-max-rows="1"
             data-size="medium"
             data-button-type="login_with"
             data-show-faces="true"
             data-auto-logout-link="true"
             data-use-continue-as="false"
              classNames="btn-facebook"
              id= "btn-social-login">
        </div>
    </div>
    )
  }
}


export default Login;
