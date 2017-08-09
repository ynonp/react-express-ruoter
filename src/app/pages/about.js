import React, { Component, PropTypes } from 'react';

export default class AboutPage extends Component {
  render() {

    return (
      <div>
        <h1>About Us</h1>
        <p>{this.props.text}</p>
        <a href='/'>Go Home</a>
      </div>
    );
  }
}

