import React from 'react';
import { connect } from 'react-redux';
import './AppMap.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';


class AppMap extends React.Component {

  constructor(props) {
    super(props);
    mapboxgl.accessToken = "pk.eyJ1IjoiY2Fha2VyIiwiYSI6ImNrbnA5ZGtkejFlMTkydnB1a2lwMXZ3ZnAifQ.72ee2CQHB6BikaRCluEs_A";
    this.element = document.getElementById("container-2");    
  }

  componentDidMount() {
    this.element.classList.add("container-2-mapview");
    this.getLocation();
  }

  componentWillUnmount(){
    this.element.classList.remove("container-2-mapview");
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(this.success, this.error, { enableHighAccuracy: true });
  }

  success = (position) => {
    this.setup([position.coords.longitude, position.coords.latitude]);
  }

  error = () => {
    this.setup([-122.42, 37.77]);
  }
  
  setup = (center) => {
    this.map = new mapboxgl.Map({
      container: "app_map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: 8
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


