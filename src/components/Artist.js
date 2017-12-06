import React, { Component } from 'react';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';
import '../styles/Artist.css';
import '../App.css';

class Artist extends Component {
constructor(props){
  super(props);

  this.state = {
    artworkData: [{}],
    artistData: {},
  }
}


componentDidMount() {
    //get user from Mongo with firebaseIds
    axios.get('https://artshare-api.herokuapp.com/user/fire/'+this.props.match.params.id)
    .then((result) => {
      const thisArtist = result.data;
      this.setState({
        artistData: thisArtist.length > 0 ? thisArtist[0] : {},
      });
      console.log(this.state.artistData);
    })
    .catch(function (error) {
      console.log(error);
    });


    //get Artworks for user from Mongo
    axios.get('https://artshare-api.herokuapp.com/artworks/'+this.props.match.params.id)
    .then((result) => {
      const artistArtData = result.data;
      this.setState({
        artworkData: artistArtData.length > 0 ? artistArtData : [{}],
      });
    })
    .catch(function (error) {
      console.log(error);
    });





}

render() {
let artistWorks;
let artist;


 if(this.state.artistData !== null || this.state.artistData !== undefined){
      artist =
          <div className="artistDetails">
             <div className="artistName"><h4>Artist: {this.state.artistData.displayName}</h4></div>
             <img src={this.state.artistData.profilePhoto} className="artistPhoto" width="80" height="80" />
             <div className="artworks">Artworks: {this.state.artworkData.length}</div>
             <Link to={'/'}>return to art wall</Link>
          </div>


    } else {
     artist =
           <div className="artistDetails">
             <div className="artistName"><h4>Artist: [[Artist Name and Profile Coming Soon]]</h4></div>
             <div className="artworks">Artworks: {this.state.artworkData.length}</div>
             <Link to={'/'}>return to art wall</Link>
          </div>
    }


 if(this.state.artworkData !== null || this.state.artworkData !== undefined){
      artistWorks = this.state.artworkData.map(artwork =>
           <div key={artwork._id} className="artwork">
              <img src={artwork.cloudinaryURL} alt={artwork.title} />
              <div className="text-wrap">
                <h3><Link className="title-link" to={'/artwork/'+artwork._id}>{artwork.title}</Link></h3>
              </div>
           </div>
          )

    } else {
     artistWorks =
           <div className="artwork">
              <p>error retrieving artwork.</p>
           </div>
    }

  return (
    <div className="artist">
      <div className="artshare-content">

          {artist}

          <div className="art-container" >
            <div className="art-grid">
              {artistWorks}
            </div>
          </div>
    </div>
  </div>
    );
  }
}
export default Artist;
