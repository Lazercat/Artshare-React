import React, { Component } from 'react';
import axios from 'axios';
import { instance } from '../utils/artshare-api.js';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom';
import '../styles/ViewArtwork.css';
import '../App.css';

class ViewArtwork extends Component {
constructor(props){
  super(props);

  this.state = {
    currentUser: this.props.currentUser,
    artworkData: {},
  }
}

componentWillMount() {
    axios.get('https://artshare-api.herokuapp.com/artwork/'+this.props.match.params.id)
    .then( (result)=> {
      const thisData = result.data;
      console.log(thisData);
      this.setState({
        artworkData: thisData.length > 0 ? thisData[0] : {},
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

render() {
  console.log(this.state);
  const theData = this.state.artworkData;
    if (Object.keys(theData).length > 0 && theData.constructor === Object){ // make sure it's a valid object

      return (
        <div className="viewArtwork">
              <div className="row content">
                  <div className="col-sm-8">
                     <img className="viewArt" src={theData.cloudinaryURL} text={theData.title} alt={theData.title} />
                  </div>
                  <div className="col-sm-4">
                    <div className="well">
                         <h1>{theData.title}</h1>
                         <p><strong>Artist:</strong>{theData.artist}</p>
                         <p><strong>Description:</strong> {theData.description}</p>
                         <p> {this.state.currentUser} and bacon.</p>
                         <h3><Link className="view-more-link" to={'/'} >View more art</Link></h3>
                      </div>
                  </div>


              </div>
        </div>


      );
    } else { // otherwise provide fallback content

      return (
        <div className="App">
          <h2>Oops!</h2>
          <p>Our apologies. something went wrong..</p>
        </div>
      )
    }
}
}

export default ViewArtwork;


