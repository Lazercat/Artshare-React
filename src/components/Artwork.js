import React, { Component } from 'react';
import Sharewall from './Sharewall.js';
import {
  Link
} from 'react-router-dom';
import '../styles/Artwork.css';

class Artwork extends Component {
  render() {
    return (
     <div key={this.props.artwork._id} className="artwork">

        <img to={'/artwork/'+this.props.artwork._id} src={this.props.artwork.cloudinaryURL} alt={this.props.artwork.title} />

          <div className="text-wrap">
          <div className="button-bar">
            <Link className="button-link" to={'/artwork/'+this.props.artwork._id}>View</Link>
            <Link className="button-link" to={'/artwork/'+this.props.artwork._id}>Like</Link>
            <Link className="button-link" to={'/artwork/'+this.props.artwork._id}>Buy</Link>
          </div>

          <h4 className="art-title">
            <Link className="title-link" to={'/artwork/'+this.props.artwork._id}>
             {this.props.artwork.title}
            </Link>
          </h4>
          <p className="artist-title">artist:&nbsp;
            <Link className="artist-link" to={'/artist/'+this.props.artwork.firebaseId} >
              {this.props.artwork.artist}
            </Link>
          </p>
            <div className="art-data-item art-price">price: $200</div>
            <div className="art-data-item art-status">status: Available</div>
            <div className="art-data-item art-location">city: Austin, TX, USA</div>
        </div>

      </div>
    );
  }
}


export default Artwork;

