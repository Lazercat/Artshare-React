import React, { Component } from 'react';
import axios from 'axios';
import { artShareApi } from '../utils/artshare-api.js';
import {
  Link
} from 'react-router-dom';
import '../styles/Sharewall.css';
import '../App.css';

class Sharewall extends Component {
constructor(props){
  super(props);
  this.state = {
    users: [],
    artworks: [],
    currentuser: null,
    artwork: null,
  }
}

componentDidMount() {
    axios.get('https://artshare-api.herokuapp.com/artworks')
    .then( (result)=> {
      const artData = result.data;
      this.setState({
        artworks: artData.length > 0 ? artData : [],
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}



render() {
  return (
    <div className="sharewall">
      <div className="artshare-content">

        <div className="art-container" >
          <div className="art-grid">

          {this.state.artworks.map(artwork =>
           <div key={artwork._id} className="artwork">
              <img src={artwork.cloudinaryURL} alt={artwork.title} />
              <div className="text-wrap">
                <h3><Link className="title-link" to={'/artwork/'+artwork._id}>'{artwork.title}'</Link></h3>
                <h4>artist: &nbsp;{artwork.artist}</h4>
              </div>
           </div>
          )}



          <div className="artwork">
                <img src="./addnew.png" alt="add art" />
                <h4> <Link className="title-link" to={'/post'} >Add New</Link></h4>
                <p>Add a new artwork</p>
          </div>


      </div>
    </div>






       {/* <div id="pagination-note" className="w3-center w3-padding-32">
          <div className="w3-bar">
            <a href="#" className="w3-bar-item w3-button w3-hover-black">«</a>
            <a href="#" className="w3-bar-item w3-black w3-button">1</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">2</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">3</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">4</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">»</a>
          </div>
        </div>*/}
      </div>
    </div>
    );
  }
}

export default Sharewall;
