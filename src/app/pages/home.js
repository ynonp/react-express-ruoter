import React, { Component, PropTypes } from 'react';

export default class HomePage extends Component {
  render() {

    return (
      <div>
        <h1>Welcome Home: {this.props.name}</h1>
      <p>
        Read more <a href='/about'>About Us</a>
      </p>
      </div>
    );
  }
}
