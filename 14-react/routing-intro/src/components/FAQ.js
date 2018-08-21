import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FAQ extends Component {
  render() {
    return (
      <div>
        <h1>FAQ Page</h1>
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default FAQ;