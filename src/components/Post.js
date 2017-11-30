import React, { Component } from 'react';
import axios from 'axios';
import firebase from 'firebase';
import { auth, provider } from '../utils/facebook-auth.js';
import Dropzone from 'react-dropzone';
import {
  Link
} from 'react-router-dom';
import '../App.css';
import '../styles/Post.css';

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      formstate: 'new',
      title: '',
      description: '',
      cloudinaryURL: '',
      artist: '',
      tags: '',
      firebaseId: '',
      processing: false,
      result: 'new',
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.submitMore = this.submitMore.bind(this);
}

//HANDLING A FILE DROP TO CLOUDINARY
handleDrop = files => {

  // Push all the axios request promise into a single array
  const uploaders = files.map(file => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("tags", `artshare, medium`);
    formData.append("upload_preset", "pnky0xon");
    formData.append("api_key", "338299128983276");
    formData.append("timestamp", (Date.now() / 1000) | 0);

    // Make an AJAX upload request using Axios
    return axios.post("https://api.cloudinary.com/v1_1/exist-gallery/image/upload", formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    }).then(response => {
      const data = response.data;
      const fileURL = data.secure_url // You should store this URL for future references in your app
            this.setState({
              cloudinaryURL: fileURL
            })
    })
  });

    // TODO: any follow ups? Once all the files are uploaded
    //   axios.all(uploaders).then(() => {
    //     // ... perform after upload is successful operation
    //   });
}

handleLogin(evt){
  evt.preventDefault();
  this.props.getLoginClick();
}

// SEND DATA OF POST TO ARTSHARE API TO POST TO MONGODB WITH A FETCH PROMISE
handleSubmit(event){
   this.setState({ processing: true });
    event.preventDefault();
     this.setState({
        formstate: 'submitted',
      })
    fetch( 'https://artshare-api.herokuapp.com/artwork', {
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
        artist: this.props.currentUser.displayName,
        firebaseId: this.props.currentUser.uid,
        tags: this.state.tags,
      }),
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        this.setState({ processing: false, result: 'success' });
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        this.setState({ processing: false, result: 'error'});
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
  const { result, processing } = this.state;
  const { currentUser }  = this.state;

  if (this.props.currentUser === null){
  return(
    <div className="logins">
      <h1>Post art!</h1>
      <p> Sign in with Facebook to post art! </p>

      <button onClick={this.handleLogin.bind(this)}>
        Login with Facebook
      </button>
    </div>
  )
};

  if (result === 'success' && this.props.currentUser !== null) {
    return <div className="success">
              <h1>Success!</h1>
              <p>Your art has been shared!</p>
              <Link to="/"> View Art </Link>
              <Link to='/post'> Share more art!</Link>
            </div>;
  }

  else if (result ==='error' && this.props.currentUser !== null){
    return <div className="failure">
              <h1>Ooops!</h1>
              <p>An unexpected error has occurred.</p>
              <Link to="/">View Art</Link>
              <Link to='/post'>Share more art!</Link>
           </div>;
  }

  else if (result === 'new' && this.props.currentUser !== null){
  return (
  <div className="postArt">

        <div className="post-container">
            <div className="postform-wrap">
                <form className="postform" onSubmit={this.handleSubmit} >

                    <div className="drop-container">
                    <label> Art Photo (required)</label>
                          <Dropzone
                            onDrop={this.handleDrop}
                            accept="image/*"
                            style={{"width" : "40%", "marginBottom" : "5px", "color": "#333", "float": "left", "cursor" : "pointer", "background" : "white", "padding":"7px", "height" : "auto", "border" : "2px dashed #333", "boxShadow" : "1px 1px 2px teal"}}>
                             {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                              if (isDragActive) {
                                return "This file is authorized";
                              }
                              if (isDragReject) {
                                return "This file type is not authorized";
                              }
                              return acceptedFiles.length || rejectedFiles.length
                                ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} file`
                                : "Drag and Drop or click here to upload art image.";
                            }}
                          </Dropzone>
                          <img className="uploadPreview" src={this.state.cloudinaryURL} alt="upload photo preview"/>
                    </div>

                    <input disabled className="disabled"
                      onChange={ (evt) => { this.setState({ cloudinaryURL: evt.target.value}); }}
                      value={ this.state.cloudinaryURL }
                      placeholder="http://www.your-photo.com..." type="text" name="cloudinaryURL"
                    />

                    <label> Title (required)
                    <input required
                      onChange={ (evt) => { this.setState({ title: evt.target.value}); }}
                      value={ this.state.title }
                      placeholder="name of artwork" type="text" name="title"
                    /></label><br />

                    <label> Search Tags
                    <input
                      onChange={ (evt) => { this.setState({ tags: evt.target.value}); }}
                      value={ this.state.tags }
                      placeholder="tags of artwork" type="text" name="tags"
                    /></label><br />


                      <label> Description
                    <textarea
                      onChange={ (evt) => { this.setState({ description: evt.target.value}); } }
                      value={ this.state.description }
                      placeholder="describe your art here." type="text" name="description"
                    ></textarea></label><br />


                    <div className="button-wrap">
                      <button type="Submit">Post Art!</button>
                    </div>
                </form></div>
            </div>
      </div>
    ); }
  }
}

export default Post;
