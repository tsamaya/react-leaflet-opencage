import React, { Component } from 'react';
import L from 'leaflet';
// postCSS import of Leaflet's CSS
import 'leaflet/dist/leaflet.css';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
    };
    this.mapNode = null;
  }
  componentDidMount() {
    // create the Leaflet map object
    if (!this.state.map) {
      this.initMap();
    }
  }
  componentWillUnmount() {
    // destroys the Leaflet map object & related event listeners
    this.state.map.remove();
  }

  initMap() {
    if (this.state.map) return;
    // creates the Leaflet map object
    // it is called after the Map component mounts
    let map = L.map(this.mapNode, {
      center: [54.003644, -2.547859],
      zoom: 5,
    });

    L.tileLayer(
      'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}',
      {
        attribution:
          'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png',
      }
    ).addTo(map);

    // set the state
    this.setState({ map });

    map.invalidateSize();
  }

  render() {
    return (
      <div className="map-wrapper">
        <div ref={node => (this.mapNode = node)} id="map" />
      </div>
    );
  }
}

export default Map;
