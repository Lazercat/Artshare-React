import React, { Component } from 'react';
import '../styles/Sharewall.css';
import '../App.css';


class Sharewall extends Component {
  render() {
    return (
<div className="Sharewall">

  <div id="pagecontent-note" className="artshare-content w3-main w3-content w3-padding">
    <div className="w3-row-padding w3-padding-16 w3-center" id="food">
      <div className="w3-quarter">
        <img src="https://i.pinimg.com/736x/d4/3c/e0/d43ce059d34b39bef244b92d905bddba--painting-art-ideas-acrylics-artistic-painting.jpg" alt="Sandwich" />
        <h3>Woman In Oil</h3>
        <h4>Joe Artist</h4>
        <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
      </div>
      <div className="w3-quarter">
        <img src="http://brightcove01.brightcove.com/22/104524641001/201711/753/104524641001_5647696712001_5647691946001-vs.jpg?pubId=104524641001&videoId=5647691946001" alt="Steak" />
        <h3>Woman Lounging With Fruit</h3>
        <h4>Elizabeth L. Painter</h4>
        <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
      </div>
      <div className="w3-quarter">
        <img src="https://zlatkomusicart.files.wordpress.com/2016/04/abstract-portrait-acrylic-on-canvas-contemporary-art-painting-zlatko-music-modern-art-prints.jpg" alt="Cherries" />
        <h3>Cherries, interrupted</h3>
        <h4>Julia Blue</h4>
        <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
      </div>
      <div className="w3-quarter">
        <img src="https://i.redd.it/q84igp7s6miz.jpg" alt="Pasta and Wine" />
        <h3>Once Again, Robust Wine and Vegetable Pasta</h3>
        <h4>Henry Garnet</h4>
        <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
      </div>
    </div>
    <div id="photogrid-2-note" className="w3-row-padding w3-padding-16 w3-center">
      <div className="w3-quarter">
        <img src="/w3images/popsicle.jpg" alt="Popsicle"  />
        <h3>All I Need Is a Popsicle</h3>
        <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
      </div>
      <div className="w3-quarter">
        <img src="/w3images/salmon.jpg" alt="Salmon" />
        <h3>Salmon For Your Skin</h3>
        <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
      </div>
      <div className="w3-quarter">
        <img src="/w3images/sandwich.jpg" alt="Sandwich" />
        <h3>The Perfect Sandwich, A Real classNameic</h3>
        <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
      </div>
      <div className="w3-quarter">
        <img src="/w3images/croissant.jpg" alt="Croissant" />
        <h3>Le French</h3>
        <p>Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
      </div>
    </div>
    <hr />
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
