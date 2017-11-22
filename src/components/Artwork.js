import React, { Component } from 'react';


class Artwork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artworkTitle: this.props.activeResult.title,
    };
    this.handleClose = this.handleClose.bind(this);
    this._handleSubmitRender = this._handleSubmitRender.bind(this);
  }

  componentWillMount() {
    this.ref = database.ref('/snippets');
  }

  componentWillUnmount() {
    this.ref.off();
  }

  _handleSubmitRender = () => {
    this.props.renderNewSubmit();
  }

  handleClose(evt) {
    evt.preventDefault();
    console.log('Closing Artwork request.');
    this._handleSubmitRender();
  };

  render() {
    let _handleSubmitRender;
    return (
      <div>
        <div>
          <h1>{ this.props.activeResult.title }</h1>

          <h2> Code: </h2>
          <pre>
            <code>
              { this.props.activeResult.description }
            </code>
          </pre>

          <h2> Tags: </h2>
          <div>
            { this.props.activeResult.photoURL }
          </div>
        </div>
        <div className="submit-form">
             <form onSubmit={ this.handleClose } id="form-closeview" className="form-closeview">
              <div className="row">
                <button>Close</button>
              </div>
            </form>
        </div>
    </div>
    );
  }
}

export default Artwork;
