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
    currentUser: this.props.currentUser,
    artworkData: [{}],
  }
}


componentDidMount() {
    console.log('componentmountthinks '+'https://artshare-api.herokuapp.com/artworks/'+this.props.match.params.firebaseId );
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
let artFilter;
 if(this.state.artworkData !== null || this.state.artworkData !== undefined){

      artFilter = this.state.artworkData.map(artwork =>
           <div key={artwork._id} className="artwork">
              <img src={artwork.cloudinaryURL} alt={artwork.title} />
              <div className="text-wrap">
                <h3>'<Link className="title-link" to={'/artwork/'+artwork._id}>{artwork.title}</Link>'</h3>
              </div>
           </div>
          )

    } else {
     artFilter =
           <div className="artwork">
              <p>error retrieving artist's artwork</p>
           </div>

    }

  return (
    <div className="artist">

      <div className="artshare-content">

        <div className="artistDetails">
         <div className="artistName"><h4>Artist: [[Artist Name and Profile Coming Soon]]</h4></div>
         <div className="artworks">Artworks: {this.state.artworkData.length}</div>
         <div>more info coming..</div>
         <Link to={'/'}>return to art wall</Link>


        </div>






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
export default Artist;
