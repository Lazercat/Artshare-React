import React, { Component } from 'react';
import '../styles/Documentation.css';

class Documentation extends Component {
  render() {
    return (

    <div className="about">
      <div className="documentation">

          <div>
            <h1> About ArtShare</h1>
            <p>
              ArtShare is a capstone project created, owned and maintained by Jesse Lewis, a fellow at General Assembly in Austin, TX.
              The code is available for view at Github.com, however I reserve the rights to this product.
            </p>

            <h3>MVP Features </h3>
            <p>This web application was built and completed in 7 days with the following features.</p>
            <ul>
              <li>basic search functionality</li>
              <li>Dropzone.js drag and drop</li>
              <li>A back-end ArtShare Api running on Heroku that stores all data <a href="https://artshare-api.herokuapp.com">https://artshare-api.herokuapp.com</a></li>
              <li>A Cloudinary API that handles and stores all image files prior to form post</li>
              <li>Unique accounts with Facebook Login provided through Firebase DB Authentication</li>
              <li>A front-end web application running on Heroku written in React.js (this website)</li>
              <li>Users can upload art to Cloudinary and post data to MongoDB configured via my Artshare API Node.js, Express Web App</li>
              <li>Public can view all posts that have been shared</li>
              <li>A link to my website, <a href="http://www.jesselewis.work">www.jesselewis.work</a> where you can learn more about me and my works, or hire me.</li>
            </ul>

            <h3>Future Feature Roadmap </h3>
            <p>What happens beyond day 7? Everything!</p>

            <ul>
              <li>Results pagination</li>
              <li>improved responsive design</li>
              <li>improved mobile navigation solution</li>
              <li>post user data from firebase into mongoDB for user profile data and relations.</li>
              <li>improved search, filter/sort results, ignore keyword capitalization</li>
              <li>add fields for dimensions, city location, medium chosen</li>
              <li>TLS Encryption</li>
              <li>Artist Profiles / manage my art</li>
              <li>Share to Facebook ability</li>
              <li>Share to Instagram ability</li>
              <li>Base color search</li>
            </ul>
          </div>

      </div>
    </div>
    );
  }
}

export default Documentation;
