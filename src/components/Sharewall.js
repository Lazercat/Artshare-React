import React, { Component } from 'react';
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
    users: [],
    artworks: [],
    currentUser: null,
    artwork: null,
    activeSearchTerm: '',
  }
}

componentDidMount() {
    axios.get('https://artshare-api.herokuapp.com/artworks')
    .then( (result) => {
      const artData = result.data;
       const shuffledPosts = shuffleArt(artData);
      this.setState({
        artworks: shuffledPosts.length > 0 ? shuffledPosts : [],
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

render() {
let artFilter;

 if(this.state.activeSearchTerm !== null){

      artFilter = this.state.artworks
              .filter(artwork => artwork.title.indexOf(this.state.activeSearchTerm)!== -1 || artwork.tags.indexOf(this.state.activeSearchTerm)!== -1 || artwork.description.indexOf(this.state.activeSearchTerm)!== -1 || artwork.artist.indexOf(this.state.activeSearchTerm)!== -1)
            .map(artwork =>
           <div key={artwork._id} className="artwork">
              <img src={artwork.cloudinaryURL} alt={artwork.title} />
              <div className="text-wrap">
                <h3>'<Link className="title-link" to={'/artwork/'+artwork._id}>{artwork.title}</Link>'</h3>
                <h4>artist: &nbsp;<Link className="artist-link" to={'/artist/'+artwork.firebaseId}>{artwork.artist}</Link></h4>
              </div>
           </div>
          )

    } else if (this.state.activeSearchTerm === null || this.state.keyword === undefined) {
     artFilter = this.state.artworks.map(artwork =>
           <div key={artwork._id} className="artwork">
              <img src={artwork.cloudinaryURL} alt={artwork.title} />
              <div className="text-wrap">
                <h3>'<Link className="title-link" to={'/artist/'+artwork._id}>{artwork.title}</Link>'</h3>
                <h4>artist: &nbsp;{artwork.artist}</h4>
              </div>
           </div>
          )
    }

  return (
    <div className="sharewall">
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

      <div className="artshare-content">

        <div className="art-container" >
          <div className="art-grid">

            {artFilter}

           <div className="artwork add-wrap">
                <img src="./addnew.png" className="add-new" alt="add art" />
                <h4> <Link className="title-link" to={'/post'} >Add New</Link></h4>
          </div>

      </div>
    </div>


  </div>
</div>
    );
  }
}

export default Sharewall;
