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
    currentUser: this.props.currentUser,
    artworkData: {},
    processing: false,
  }
}

handleOpenModal() {
  var modal = document.getElementById('myModal');
  var modalCloseBtn = document.getElementsByClassName("close")[0];
  var openBtn = document.getElementById('myBtn');
  var modalHide = function(){
    modal.style.display = 'none';
    modalCloseBtn.removeEventListener('click', handleCloseButton);
    window.removeEventListener('click', handleWindowClick);
  }
  var handleCloseButton = function(evt){
    modalHide();
  }
  var handleWindowClick = function(evt) {

    //in react onclick on the button was being handled as a window click, auto-closing the modal
    if (evt.target!== openBtn){
      modalHide();
    }
  }
  modal.style.display = 'block';
  modalCloseBtn.addEventListener('click', handleCloseButton);
  window.addEventListener('click', handleWindowClick);
}

componentDidMount() {
    this.setState({ processing: true });
    axios.get('https://artshare-api.herokuapp.com/artwork/'+this.props.match.params.id)
    .then( (result) => {
      const thisData = result.data;
      this.setState({
        artworkData: thisData.length > 0 ? thisData[0] : {},
      });
    })
    .catch(function (error) {
      console.log(error);
    });
    this.setState({ processing: false });
}

render() {
  const theData = this.state.artworkData;
    if (Object.keys(theData).length > 0 && theData.constructor === Object){ // make sure it's a valid object
     let created = theData.createdOn.slice(0, 9);
      return (
        <div className="viewArtwork">

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
                     <h1>'{theData.title}'</h1>
                     <h4>Artist:&nbsp;</h4><p>{theData.artist}</p>
                     <h4>Description:&nbsp;</h4><p>{theData.description}</p>
                     <h4>Tags&nbsp;</h4><p>{theData.tags}</p>
                     <h4>Submitted</h4><p>{created}</p>
                     <p><Link className="view-more-link" to={'/'} >[close]</Link></p>
                  </div>
              </div>
          </div>
        </div>


      );
    } else if (this.state.processing) { // otherwise provide fallback content

      return (
        <div className="App">
          <h2>Loading..</h2>
        </div>
      )
    } else {

      return (
        <div className="App">
          <h2>Error..</h2>
        </div>
      )
    }




}
}

export default ViewArtwork;


