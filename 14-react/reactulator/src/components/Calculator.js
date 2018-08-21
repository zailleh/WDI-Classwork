import React, { Component } from 'react'

class Calculator extends Component {
  constructor() {
    super();

    // bind event handlers?
    this._updateInput = this._updateInput.bind(this)
    // state
    this.state = {
      a: 0,
      b: 0
    }
  }

  _updateInput( e, attr ) {
    this.setState( { [attr]: e.target.value })
  }

  render() {
    const { a, b } = this.state
    return(
      <div>
        <h1>Reactulator!</h1>
        <input type="number" value={this.state.a} onChange={ (e) => this._updateInput(e, 'a') } />
        <input type="number" value={this.state.b} onChange={ (e) => this._updateInput(e, 'b')} />
        <h2>Results</h2>
        <p>{ a } + { b } = { a + b }</p>
        <p>{ a } - { b } = { a - b }</p>
        <p>{ a } / { b } = { a / b }</p>
        <p>{ a } x { b } = { a * b }</p>
      </div>
    )
  }
}

export default Calculator