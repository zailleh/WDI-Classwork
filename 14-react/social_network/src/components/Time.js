import React, { Component } from 'react'

// TODO: create a <Time /> component that shows how many seconds the user has been on the page.

class Time extends Component {
  constructor() {
    super();
    this.state = { time: 0 };

    setInterval(() => {
      this.setState({ time: this.state.time + 1 })
    }, 1000);

  }

  render() {
    return (
      <h3>You loaded this page {this.state.time} seconds ago</h3>
    )
  }
}

export default Time