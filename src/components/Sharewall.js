import React, { Component } from 'react';
import '../styles/Sharewall.css';
import '../App.css';


class Sharewall extends Component {
constructor(props){
  super(props);

  this.state = {
    users: [],
    artworks: [],
    currentuser: null,

  }
}

componentDidMount() {
  fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({ users }));
}

componentWillMount() {
  fetch('/artworks')
    .then(res => res.json())
    .then(artworks => this.setState({ artworks }));
}

render() {
  return (
    <div className="sharewall">
      <div className="artshare-content">

        <div className="art-container" >
          <div className="art-grid">
          {this.state.artworks.map(artwork =>
           <div key={artwork.id} className="artwork">
              <img src={artwork.cloudinaryURL} alt={artwork.title} />
              <h3>{artwork.title}</h3>
              <h4><a href="#">Artist Name</a></h4>
              <p>{artwork.description}</p>
          </div>
            )}
          </div>
        </div>





        <hr />

        <div className="load-more-wrap">
          <button className="btn-load">Load More</button>
        </div>




        <div id="pagination-note" className="w3-center w3-padding-32">
          <div className="w3-bar">
            <a href="#" className="w3-bar-item w3-button w3-hover-black">«</a>
            <a href="#" className="w3-bar-item w3-black w3-button">1</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">2</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">3</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">4</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">»</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Sharewall;
