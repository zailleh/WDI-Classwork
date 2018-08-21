import React, { Component } from 'react';
import Link from 'gatsby-link'


export default 
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
  }

  render() {
    return(
      <div>
        <h1>Counter</h1>
        <p>Current Count: {this.state.counter}</p>
        <button 
          onClick={ () => this.setState( {counter: this.state.counter + 1}) }
        >
          plus
        </button>
        <button
          onClick={() => {
            this.setState( {counter: this.state.counter - 1})
          }}
        >
          minus
        </button>
      </div>
    )
  }
}