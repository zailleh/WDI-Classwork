import React, { Component } from 'react'
import Axios from 'axios';

const SERVER_URL = 'http://c8c1af5d.ngrok.io/secrets.json';

class Secrets extends Component {
  constructor() {
    super();

    // bind functions
    this.onSubmit = this.onSubmit.bind(this);

    // set initial state
    this.state = {
      secrets: []
    };
    this.sendSecret();
    this.getSecrets()
  }

  getSecrets() {
    Axios.get(SERVER_URL).then( (results) => {
      this.setState( {secrets: results.data} );
      setTimeout( () => this.getSecrets(), 4000);
    });
  }

  sendSecret() {
    
  }

  onSubmit(secret) {
    const data = { content: secret }
  
    Axios.post(SERVER_URL, data).then((results) => {
      this.setState({ secrets: [results.data, ...this.state.secrets] })
    });
  }

  render() {
    return (
      <div>
        <h1>Secrets.app</h1>
        
        <SecretForm onSubmit={ this.onSubmit } />
        <Gallery secrets={ this.state.secrets }/>
      </div>
    )
  }
}

class SecretForm extends Component {
  constructor() {
    super();
    // bind handlers
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

    // set state
    this.state = { secret: "" }
  }


  _handleInput(e) {
    this.setState({ secret: e.target.value });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.secret);
    e.target.reset();
    e.target.secret.focus();
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit } >
        <label htmlFor="secret">Tell us all your secrets!</label>
        <div id="formarea">
          <textarea id="secret" name="secret" onInput={ this._handleInput }></textarea>
          <input id="tell" type="submit" value="Tell" />
        </div>
      </form>
    )
  }
}

class Gallery extends Component {

  render() {
    return (
      <div>
        { this.props.secrets.map( (s,i) => <Secret secret={s} key={s.id} /> )}
      </div>
    )
  }
}

class Secret extends Component {
  render() {
    return (
      <div className="secret">
        { this.props.secret.content }
      </div>
    )
  }
}


export default Secrets