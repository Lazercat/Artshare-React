import React, { Component } from 'react';
import Axios from 'axios';
import { instance } from '../utils/artshare-api.js';
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
    fetch( process.env.ARTSHARE_ARTWORK_URL, {
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
     formdisplay =  <form onSubmit={this.handleSubmit} >
                        <label> Title
                        <input
                          onChange={ (evt) => { this.setState({ title: evt.target.value}); }}
                          value={ this.state.title }
                          placeholder="title" type="text" name="title"
                        /></label><br />

                        <label> Description
                        <input
                          onChange={ (evt) => { this.setState({ description: evt.target.value}); } }
                          value={ this.state.description }
                          placeholder="description" type="text" name="description"
                        /></label><br />

                        <label> Photo URL
                        <input
                          onChange={ (evt) => { this.setState({ cloudinaryURL: evt.target.value}); } }
                          value={ this.state.cloudinaryURL }
                          placeholder="image url http://...." type="text" name="cloudinaryURL"
                        /></label><br />

                        <label> Artist
                        <input
                          onChange={ (evt) => { this.setState({ artist: evt.target.value}); } }
                          value={ this.state.artist }
                          placeholder="artist" type="text" name="artist"
                        /></label><br />

                        <button type="Submit">Start</button>
                    </form>;

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
            <h3>{ this.state.title}</h3>
              <h3>{ this.state.description}</h3>
                <h3>{ this.state.cloudinaryURL}</h3>
                <img className="uploadPreview" src={this.state.cloudinaryURL} />
                  <h3>{ this.state.artist}</h3>

        <div className="form-style-10">
        {formdisplay}
        </div>
     </div>
    );
  }
}

export default Post;
