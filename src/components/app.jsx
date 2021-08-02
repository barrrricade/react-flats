import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list';
import Marker from './marker';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      allFlats: flats
    };
  }

  centerMap = () => {
    const { lat, lng } = this.state.selectedFlat;
    return ({
      lat,
      lng
    });
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    const { allFlats, selectedFlat } = this.state;
    const { lat, lng } = selectedFlat;

    return (
      <div>
        <div className="flat-list">
          <FlatList flats={allFlats} selectedFlat={selectedFlat} selectFlat={this.selectFlat} />
        </div>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.centerMap()} defaultZoom={15}>
            <Marker lat={lat} lng={lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
