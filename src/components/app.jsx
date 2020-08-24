import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "UvVPGKTfVEPkYaXdMa"
    };
  }

  switch = (image) => {
    this.setState({
      selectedGifId: image.split('/')[4]
    });
  }

  search = (query) => {
    giphy('tOABssXIdHe3QlBdR0TSMB0aGdH8a6PW').search({
      q: query,
      limit: 10
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
