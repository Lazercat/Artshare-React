import React, { Component } from 'react';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';
import '../styles/ViewArtwork.css';
import '../App.css';

class ViewArtwork extends Component {
constructor(props){
  super(props);

  this.state = {
    hasError: false,
    error: null,
    currentUser: this.props.currentUser,
    artworkData: {},
    processing: false,
  }
}


// handleOpenModal() {
//   var modal = document.getElementById('myModal');
//   var modalCloseBtn = document.getElementsByClassName("close")[0];
//   var openBtn = document.getElementById('myBtn');
//   var modalHide = function(){
//     modal.style.display = 'none';
//     modalCloseBtn.removeEventListener('click', handleCloseButton);
//     window.removeEventListener('click', handleWindowClick);
//   }
//   var handleCloseButton = function(evt){
//     modalHide();
//   }
//   var handleWindowClick = function(evt) {
//     //in react onclick on the button was being handled as a window click, auto-closing the modal
//     if (evt.target!== openBtn){
//       modalHide();
//     }
//   }
//   modal.style.display = 'block';
//   modalCloseBtn.addEventListener('click', handleCloseButton);
//   window.addEventListener('click', handleWindowClick);
// }

componentDidMount() {
    this.setState({ processing: true });
    axios.get('https://artshare-api.herokuapp.com/artwork/'+this.props.match.params.id)
    .then( (result) => {
      const thisData = result.data;
      this.setState({
        artworkData: thisData.length > 0 ? thisData[0] : {},
        processing: false,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}


componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true, error: info });
  }


render() {

    const theData = this.state.artworkData;
    if (Object.keys(theData).length > 0 && theData.constructor === Object){ // make sure it's a valid object

        // remove the time data from the date. todo: make this look normal.
        let created = theData.createdOn.slice(0, 9);

        // Time for some string cleaning
        let preclean = theData.tags.replace(/['"]+/g, ''); // remove quotations -string
        let clean = preclean.trim(); //remove spaces on edges -string
        let tagString = JSON.stringify(preclean); //return tags as JSON object -string
        let tagString2 = tagString.split(','); //delimit by commas -object


        // Get tag object into array
        let i;
        let newTagArray = [];
        for(i = 0; i < tagString2.length; i++) {
          newTagArray.push({'tag': tagString2[i]});
        }
        console.log(newTagArray +" NEWTAGARRAY")

        //crawl through array and display a tag for each one
         let cleanTags =
                        newTagArray.map((tag) => {
                          return (<div key={tag.index} className="react-tags">{ tag.tag }</div>);
                         })


      return (
        <div className="viewArtwork">
           <div className="viewArtwork-container">

            <div id="myModal" className="modal">
              <div className="modal-content">
                <img className="viewArtModal" src={theData.cloudinaryURL} text={theData.title} alt={theData.title} />
                <span className="close">&times;</span>
              </div>
            </div>

          <div className="row content">
              <div className="col-sm-8">
                 <img className="viewArt" src={theData.cloudinaryURL} text={theData.title} alt={theData.title} />
              </div>

              <div className="col-sm-4">
                <div className="well">
                    <h2>'{theData.title}'</h2>
                    <label><strong>Artist</strong></label><p><Link className="artist-link" to={'/artist/'+theData.firebaseId}>{theData.artist}</Link></p>
                    <label><strong>Description</strong></label><p>{theData.description}</p>
                    <label><strong>Submitted</strong></label><p>{created}</p>
                    <label><strong>Tags</strong></label>
                        {cleanTags}
                    <div className="view-more"><Link className="view-more-link" to={'/'} >[close]</Link></div>
                  </div>
              </div>
           </div>

          </div>
        </div>
      )

    } else if(this.state.processing) { // otherwise provide fallback content

      return (
        <div className="viewArtwork">
          <h2>Loading..</h2>
        </div>
      )
    } else if(this.state.hasError) {
      return (
        <div className="viewArtwork">
          <h2>Error..</h2>
          {this.state.error}
        </div>
      )
    } else {
      return (
        <div className="viewArtwork">
          <h1>unhandled exception.</h1>
          <p>oops! something happened. </p>
        </div>
        )
    }




}
}

export default ViewArtwork;


