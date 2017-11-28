import React, { Component } from 'react';
import '../styles/Documentation.css';

class Documentation extends Component {
  render() {
    return (
      <div className="documentation">

          <div>
            <h1> About ArtShare</h1>
            <p> ArtShare is a capstone project created, owned and maintained by Jesse Lewis, a fellow at General Assembly in Austin, TX.
                The code is available for view at Github.com, however I reserve the rights to this product.
            </p>

            <h3>MVP Features </h3>
            <p>This web application was built and completed in 7 days with the following features.</p>
            <ul>
              <li>A back-end ArtShare Api that stores all data <a href="https://artshare-api.herokuapp.com">https://artshare-api.herokuapp.com</a></li>
              <li>A Cloudinary API that handles and stores all image files</li>
              <li>A front-end web application written in React.js (this website)</li>
              <li>Users can upload art to Cloudinary and post data to MongoDB configured via my Artshare API Node.js, Express Web App</li>
              <li>Public can view all posts that have been shared</li>
              <li>A link to my website, <a href="http://www.jesselewis.work">www.jesselewis.work</a> where you can learn more about me, my work, or even hire me</li>
            </ul>

            <h3>Future Feature Roadmap </h3>
            <p>What happens beyond day 7? Everything!</p>

            <ul>
              <li>Unique accounts with Facebook Login</li>
              <li>Search functionality</li>
              <li>Results pagination</li>
              <li>TLS Encryption</li>
              <li>Artist Profiles</li>
              <li>Share to Facebook Graph integration</li>
              <li>Share to Instagram integration</li>
              <li>Ability to sell art</li>
            </ul>


          </div>

      </div>
    );
  }
}

export default Documentation;
