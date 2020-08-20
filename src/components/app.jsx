import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifsList: [],
      selectedGifId: "gIYVGjGT97aA77A5Ej"
    };
  }

  search = (query) => {
    giphy('tOABssXIdHe3QlBdR0TSMB0aGdH8a6PW').search({
      q: query,
      limit: 10
    }, (err, res) => {
      this.setState({
        gifsList: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <div className="search-bar">
            <SearchBar searchFunc={this.search} />
          </div>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifsList} className="gifs" />
        </div>
      </div>
    );
  }
}

export default App;
