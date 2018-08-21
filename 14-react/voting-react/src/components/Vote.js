import React, { Component } from 'react'

class Vote extends Component {
  constructor() {
    super();
    this.state = { vote: 0, score: 0 };
  }

  vote( num ) {
    // if new vote is same as old vote, set vote 0
    const vote = num === this.state.vote ? 0 : num
    // new score = current score (undo current vote) new vote
    const newScore = this.state.score + (this.state.vote * -1) + vote

    this.setState({ vote: vote, score: newScore })
  }

  render() {
    return (
      <div style={ {"textAlign": "center"} }>
        <button onClick={ () => this.vote(1) }>Up Vote</button>
        <div>{ this.state.score }</div>
        <button onClick={ () => this.vote(-1) }>Down Vote</button>
      </div>
    )
  }
}

export default Vote