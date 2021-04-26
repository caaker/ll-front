import React from 'react';
import { connect } from 'react-redux';
import './AppMap.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';


class AppMap extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1IjoiY2Fha2VyIiwiYSI6ImNrbnA5ZGtkejFlMTkydnB1a2lwMXZ3ZnAifQ.72ee2CQHB6BikaRCluEs_A";
    const map = new mapboxgl.Map({
      container: "app_map",
      style: "mapbox://styles/mapbox/streets-v11"
    });
  }

  render () {
    return (
      <div id = "app_map">
      </div>
    )
  }
} 

export default AppMap;


