import React, { Component } from 'react';
import Axios from 'axios';
import { artShareApi } from '../utils/artshare-api.js';
import '../App.css';
import '../styles/Post.css';
require('dotenv').config();


class Post extends Component {
constructor(props){
  super(props);
  this.state = {
    user: null,
    formstate: 'new',
    title: '',
    description: '',
    cloudinaryURL: '',
    artist: '',
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.submitMore = this.submitMore.bind(this);
}


handleSubmit(event){
    event.preventDefault();
    fetch( 'https://artshare-api.herokuapp.com/user/5a14951afe8c7b0014d2b8c1/artwork', {
      method: 'post',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
        cloudinaryURL: this.state.cloudinaryURL,
        artist: this.state.artist,
      }),
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        console.log(JSON.stringify(error));
        throw error;
      }
    })
    .catch(error => { console.log('request failed', error); });
  }

submitMore(){
  this.setState({
    formstate: 'new',
  })
}

render() {
  let confirmSubmit;
   let formdisplay;
    if (this.state.formstate==='new'){
     formdisplay =  <div className="postform"> <form onSubmit={this.handleSubmit} >


                        <label> Photo URL
                        <input
                          onChange={ (evt) => { this.setState({ cloudinaryURL: evt.target.value}); } }
                          value={ this.state.cloudinaryURL }
                          placeholder="http://www.your-photo.com..." type="text" name="cloudinaryURL"
                        /></label><br />

                        <label> Title
                        <input
                          onChange={ (evt) => { this.setState({ title: evt.target.value}); }}
                          value={ this.state.title }
                          placeholder="name of artwork" type="text" name="title"
                        /></label><br />

                        <label> Artist
                        <input
                          onChange={ (evt) => { this.setState({ artist: evt.target.value}); } }
                          value={ this.state.artist }
                          placeholder="original artist" type="text" name="artist"
                        /></label><br />


                          <label> Description
                        <textarea
                          onChange={ (evt) => { this.setState({ description: evt.target.value}); } }
                          value={ this.state.description }
                          placeholder="describe your art here." type="text" name="description"
                        > </textarea></label><br />


                        <button type="Submit">Start</button>
                    </form></div>;

    } else if (this.state.formstate==='submitted'){
    formdisplay =  <div>
                      <h1>Artwork submitted!</h1>
                     <button type="button" onClick={this.submitMore()}>primary</button>
                  </div>;
    } else {
    formdisplay =   <div>
                      <h1> Unexplained state error! formstate is unknown. </h1>
                    </div>;
    }


  return (
     <div className="postArt">
        <img className="uploadPreview" src={this.state.cloudinaryURL} />


        <div className="form-style-10">
          {formdisplay}
        </div>
     </div>
    );
  }
}

export default Post;
