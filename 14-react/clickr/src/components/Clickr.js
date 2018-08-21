import React, { Component } from 'react';

class Clickr extends Component {
  constructor() {
    super()
    
    this.state = {
      clicks: 0
    };

    this._incrementClicks = this._incrementClicks.bind(this);
  }

  // update: event handlers, _ is a convention
  _incrementClicks() {
    console.log('YOU CLICKED THE THING!!');
    this.setState( { clicks: this.state.clicks + 1 } );
  }

  // view
  render() {
    return (
      <button onClick={ this._incrementClicks }>{ this.state.clicks } clicks so far</button>
    )
  }
}

export default Clickr;