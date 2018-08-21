import React, { Component } from 'react';


class Character extends Component {

  render() {
    const { name } = this.props.match.params
    return (
      <div>
        <h2> { name } </h2>
      </div>
    )
  }
}

export default Character;