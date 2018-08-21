import React, { Component } from 'react'

// TODO: create a <Time /> component that shows how many seconds the user has been on the page.

class Clock extends Component {
  constructor() {
    super();
    this.state = { time: new Date().toISOString() };

    setInterval(() => {
      this.setState({ time: new Date().toISOString() })
    }, 1000);
  
  }

  render() {
    return (
      <h3>{ this.state.time }</h3>
    )
  }
}

export default Clock