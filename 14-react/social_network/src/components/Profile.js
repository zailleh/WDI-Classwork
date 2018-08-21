import React, { Component } from 'react';

class Profile extends Component {
  constructor() {
    super();
    // bind event handlers

    // state
    this.state = {
      height: 100
    }
  }

  _zoom(amnt) {
    this.setState({height: this.state.height + amnt*10})
  }

  render() {
    const { name, age, motto, pic } = this.props;
    return (
      <div className="profile">
        <h1>{ name }</h1>
        <div>
          <button onClick={() => this._zoom(1)}>+</button>
          <button onClick={() => this._zoom(-1)}>-</button>
        </div>
        <img src={ pic } alt={ name } height={ this.state.height }/>
        <ul>
          <li>Age: { age }</li>
          <li>Motto: { motto }</li>
        </ul>

        <hr />
      </div>
    );
  }
}

export default Profile;