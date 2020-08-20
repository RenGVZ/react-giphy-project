import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  displayGifs = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.displayGifs()}
      </div>
    );
  }
}

export default GifList;
