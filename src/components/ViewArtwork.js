import React, { Component } from 'react';
import axios from 'axios';
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
    users: [],
    artworks: [],
    currentuser: null,
    artworkData: {},
  }
}


componentDidMount() {
    axios.get('https://artshare-api.herokuapp.com/artwork/'+this.props.match.params.id)
    .then( (result)=> {
      const thisData = result.data;
      console.log(thisData);
      this.setState({
        artworkData: thisData.length > 0 ? thisData[0] : {},
      });
      console.log(this.state.artworkData);
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

            <div>

              <div className="row content">

                   <div className="col-sm-12">
                               <h1>{theData.title}</h1>
                               <img src={theData.cloudinaryURL} text={theData.title} alt={theData.title} />


                            <div className="well">
                              <p>Artwork Title: {theData.title}</p>
                            </div>
                            <div className="well">
                               <p>Artist: {theData.artist}</p>
                            </div>
                            <div className="well">
                               <p>Description {theData.description}</p>
                            </div>
                             <hr />
                              <div className="row">
                                    <h3><Link to={'/'} >Close</Link></h3>
                                </div>


                    </div>

              </div>

            </div>

        </div>


      );
    } else { // otherwise provide fallback content

      return (
        <div className="App">Hi <h1>{this.props.match.params.id}</h1>
          <h2>{this.state.artworkData.title}</h2>
        </div>
      )
    }
}
}

export default ViewArtwork;


