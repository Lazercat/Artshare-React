/* global _ */
import React, { Component } from 'react';
import Artwork from './Artwork.js';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';
import '../styles/Sharewall.css';
import '../App.css';

function shuffleArt(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class Sharewall extends Component {
  constructor(props){
    super(props);
    this.state = {
      // users: [],
      currentUser: null,
      artwork: null,
      activeSearchTerm: '',
      processing: false,
      artworks: [],
    }
  }

  componentDidMount() {
    this.setState({processing:true});
    axios.get('https://artshare-api.herokuapp.com/artworks')
    .then( (result) => {
      const artData = result.data;
       const shuffledPosts = shuffleArt(artData);
      this.setState({
        artworks: shuffledPosts.length > 0 ? shuffledPosts : [],
        processing: false,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

render() {
  const { artworks, currentPage, artworksPerPage } = this.state;
  let artFilter;

  if(this.state.activeSearchTerm !== null){
      artFilter = this.state.artworks.filter(artwork =>
                      artwork.title.indexOf(this.state.activeSearchTerm)!== -1 ||
                      artwork.tags.indexOf(this.state.activeSearchTerm)!== -1 ||
                      artwork.description.indexOf(this.state.activeSearchTerm)!== -1 ||
                      artwork.artist.indexOf(this.state.activeSearchTerm)!== -1)
                    .map(artwork =>
                       <Artwork key={artwork._id} artwork={artwork}/>
                    )

    } else if (this.state.activeSearchTerm === null || this.state.keyword === undefined) {
      artFilter = this.state.artworks
              .map(artwork =>
                 <Artwork key={artwork._id} artwork={artwork}/>
              )
    }

  if(this.state.processing === true) {
    return(
      <div className="sharewall">
        <h4 className="loading"> loading artworks...</h4>
      </div>
      )

  } else if(this.state.artworks.length <=0 && this.state.processing === false){
    return(
        <div className="sharewall">
          <p>Welcome to my demo site!
             Please visit the following link to enjoy the full ArtShare experience.</p>
          <a href="https://artshare-react.herokuapp.com">Launch Full Site</a>
        </div>
      )
  } else {

  return (
    <div>
      <div className="Search">
        <form name="searchBox" onSubmit={ this.updateSearchTerm }>
          <input
            id="searchTerm"
            className="searchTerm"
            name="searchTerm"
            placeholder="Search Artwork"
            onChange={ (evt) => { this.setState({ activeSearchTerm: evt.target.value }); }}
          />
        </form>
      </div>

      <div className="sharewall">
        <div className="artshare-content">
          <div className="art-container" >
            <div className="art-grid">
              {artFilter}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  }
  }
}

export default Sharewall;
