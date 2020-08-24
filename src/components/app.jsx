import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = "tOABssXIdHe3QlBdR0TSMB0aGdH8a6PW";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "CjmvTCZf2U3p09Cn0h"
    };
  }

  switch = (image) => {
    this.setState({
      selectedGifId: image.split('/')[4]
    });
  }

  search = (query) => {
    giphy({apiKey: GIPHY_API_KEY, https: true }).search({
      q: query,
      limit: 15
    }, (err, res) => {
      this.setState({ gifs: res.data });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} clicked={this.switch} />
        </div>
      </div>
    );
  }
}

export default App;
