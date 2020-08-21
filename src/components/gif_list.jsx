import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  imgChange = (event) => {
    this.props.clicked(event.target.src);
  }

  renderGifList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} />);
  }

  render() {
    return (
      <div className="gif-list" onClick={this.imgChange}>
        { this.renderGifList() }
      </div>
    );
  }
}

export default GifList;
