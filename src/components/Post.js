import React, { Component } from 'react';
import axios from 'axios';
import { artShareApi } from '../utils/artshare-api.js';
import Dropzone from 'react-dropzone';
import '../App.css';
import '../styles/Post.css';

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
    tags: {},
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.submitMore = this.submitMore.bind(this);
}

handleDrop = files => {
  // Push all the axios request promise into a single array
  const uploaders = files.map(file => {

    // Initial FormData
    const formData = new FormData();
    formData.append("file", file);
    formData.append("tags", `artshare, medium`);
    formData.append("upload_preset", "pnky0xon"); // Replace the preset name with your own
    formData.append("api_key", "338299128983276"); // Replace API key with your own Cloudinary key
    formData.append("timestamp", (Date.now() / 1000) | 0);

    // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
    return axios.post("https://api.cloudinary.com/v1_1/exist-gallery/image/upload", formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    }).then(response => {
      const data = response.data;
      const fileURL = data.secure_url // You should store this URL for future references in your app
      console.log(data);
            this.setState({
              cloudinaryURL: fileURL
            })
    })
  });

  // Once all the files are uploaded
//   axios.all(uploaders).then(() => {
//     // ... perform after upload is successful operation

// });
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
     formdisplay =  <div className="post-container">


                  <div className="postform-wrap">

                        <form className="postform" onSubmit={this.handleSubmit} >

                        <div className="drop-container">
                        <label> Art Photo</label>
                              <Dropzone
                                onDrop={this.handleDrop}
                                multiple
                                createImageThumnails="true"
                                accept="image/*"
                                style={{"width" : "calc(100%/2)", "margin-bottom" : "15px", "color": "white", "float": "left", "cursor" : "pointer", "background" : "rgba(136, 176, 75, 1)", "padding":"15px", "height" : "100px", "border" : "3px dashed teal", "box-shadow" : "1px 1px 3px #333"}}>
                                 {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                                  if (isDragActive) {
                                    return "This file is authorized";
                                  }
                                  if (isDragReject) {
                                    return "This file type is not authorized";
                                  }
                                  return acceptedFiles.length || rejectedFiles.length
                                    ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`
                                    : "Drag and Drop or click here to upload art image.";
                                }}
                              </Dropzone>
                                    <img className="uploadPreview" src={this.state.cloudinaryURL} />
                        </div>


                        <input hidden
                          value={ this.state.cloudinaryURL }
                          placeholder="http://www.your-photo.com..." type="text" name="cloudinaryURL"
                        />

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

                        <label> Search Tags
                        <input
                          onChange={ (evt) => { this.setState({ tags: evt.target.value}); }}
                          value={ this.state.tags }
                          placeholder="name of artwork" type="text" name="title"
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
                  </div>;

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
        <div className="form-style-10">
          {formdisplay}

        </div>
     </div>
    );
  }
}

export default Post;
