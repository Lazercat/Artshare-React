import React, { Component } from 'react';
import axios from 'axios';
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
    activeSearchTerm: '',
  }
}

componentDidMount() {
    axios.get('https://artshare-api.herokuapp.com/artworks')
    .then( (result) => {
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
  let artFilter;

 if(this.state.activeSearchTerm !== null){

      artFilter = this.state.artworks
              .filter(artwork => artwork.title.indexOf(this.state.activeSearchTerm)!== -1 || artwork.tags.indexOf(this.state.activeSearchTerm)!== -1 || artwork.description.indexOf(this.state.activeSearchTerm)!== -1 || artwork.artist.indexOf(this.state.activeSearchTerm)!== -1)
            .map(artwork =>
           <div key={artwork._id} className="artwork">
              <img src={artwork.cloudinaryURL} alt={artwork.title} />
              <div className="text-wrap">
                <h3>'<Link className="title-link" to={'/artwork/'+artwork._id}>{artwork.title}</Link>'</h3>
                <h4>artist: &nbsp;{artwork.artist}</h4>
              </div>
           </div>
          )

    } else if (this.state.activeSearchTerm == null || this.state.keyword == undefined) {
     artFilter = this.state.artworks.map(artwork =>
           <div key={artwork._id} className="artwork">
              <img src={artwork.cloudinaryURL} alt={artwork.title} />
              <div className="text-wrap">
                <h3>'<Link className="title-link" to={'/artwork/'+artwork._id}>{artwork.title}</Link>'</h3>
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
            placeholder="Search"
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
