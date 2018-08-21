import React, { Component } from 'react';

class HelloUser extends Component {
  render () {
    return (
      <h2>Hello { this.props.name || 'Mysterious User' }</h2>
    )
  }
}

export default HelloUser;