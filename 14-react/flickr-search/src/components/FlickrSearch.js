import React, { Component } from 'react';
import jsonp from 'jsonp-es6';

class FlickrSearch extends Component {
  constructor() {
    super()
    // bind methods
    this.fetchImages = this.fetchImages.bind(this);
    // state
    this.state = {images: []};
  }

  

  generateSRC(photo) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg' // change 'q' to something else for different sizes
    ].join('');
  };

  generateURL(photo) {
    // https://www.flickr.com/photos/{user-id}/{photo-id}
    return ['https://www.flickr.com/photos/',
      photo.owner,
      '/',
      photo.id
    ].join('');
  }

  fetchImages(query) {
    console.log('fetching images for query:', query);
    let url = 'https://api.flickr.com/services/rest?jsoncallback=?'
    let opts = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
      text: query,
      format: 'json'
    }

    jsonp(url, opts, { callback: 'jsoncallback' }).then((results) => {
      console.log(results);
      const images = results.photos.photo.map(this.generateSRC);
      this.setState( {images});
    })
  }

  render() {
    return (
      <div>
        <h1>Flickr Search</h1>
        <SearchForm onSubmit={ this.fetchImages }/>
        <Gallery images={ this.state.images }/>
      </div>
    );
  }
}


class SearchForm extends Component {
  constructor() {
    super();

    // event binding
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    // state
    this.state = {query: ''};
  }

  _handleInput(e) {
    this.setState({ query: e.target.value });
  }

  _handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.query)
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="butterfly" required onInput={ this._handleInput }/>
        <input type="submit" value="Search" />
      </form>
    )
  }
}

class Gallery extends Component {
  render() {
    return (
      <div>
        { this.props.images.map( (url,i) => <GalleryImage src={ url } key={ i }/> ) }
      </div>
    )
  }
}

function GalleryImage(props) {
  return (
    <img src={props.src} width="250" height="250" alt={props.src} />
  )
}


export default FlickrSearch;