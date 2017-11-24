import React, { Component } from 'react';

import '../App.css';
import Header from './Header.js';
import Footer from './Footer.js';


class Post extends Component {

constructor(props){
  super(props);

  this.state = {
    user: null,

  }
}
  render() {
    return (
      <div className="postArt">
            <div class="form-style-10">
                <h1>Add New Artwork Listing!<span></span></h1>
                <form action="/" enctype="multipart/form-data" method="POST">
                  <div class="section">
                    <span>1</span>Upload artwork photo.
                  </div>
                  <div class="inner-wrap">
                      <label>Artwork Photo<input type="file" id="photo" name="photo" /></label>
                   <div class="button-section">
                    <input type="submit" name="Upload" value="Upload Photo"/>
                  </div>
                  </div>
                </form>
                <form action="/user/<%= user._id %>/createart" method="POST">
                  <div class="section"><span>2</span>Tell us about your artwork</div>
                  <div class="inner-wrap">
                      <label>Artwork Title <input type="text" name="title" /></label>
                      <label>Price $<input type="text" name="price" /></label>
                      <label>Description <textarea name="description"></textarea></label>
                    <div class="button-section">
                     <input type="submit" name="Post art!" />
                       <span class="close">&times;</span>
                    </div>
                  </div>
              </form>
              </div>
      </div>
    );
  }
}

export default Post;
