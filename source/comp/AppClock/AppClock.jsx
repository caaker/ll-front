import React from 'react';
import { connect } from 'react-redux';
import './AppClock.css';

class AppClock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: '00:00:00 AM',
      greeting: 'Hello ',
      image: 'none',
      color: 'white'
    }
    this.bg = '';                  // hold previous body background image
    this.interval = 10000;         // holds clock update frequency - 10 seconds
  }

  componentDidMount () {
    this.runInterval();
    this.id = setInterval(()=>{
      this.runInterval();
    }, this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.id);
    document.body.style['background-image'] = this.bg;
  }

  runInterval() {
    this.runTime();
    this.runImage();    
  }

  runTime() {
    const date = new Date();
    const min = date.getMinutes();
    let hour = date.getHours();
    const amPm = hour >= 12 ? 'PM' : 'AM';
    hour = ( hour % 12 ) || 12;
    this.setState({
      time: `${hour}:${this.addZero(min)} ${amPm}`
    });
  }

  addZero(number) {
    return (parseInt(number, 10) < 10 ? '0' : '') + number;
  }

  runImage(){    
    let hour = (new Date()).getHours();
    let imageString = '';
    let greetString = '';
    let colorString = '';
    if (hour < 12) {
      imageString = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
      greetString = 'Good Morning.';
      colorString = 'black';
    } else if (hour < 18) {
      imageString = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
      greetString = 'Good Afternoon.';
      colorString = 'black';
    } else {
      imageString = "url('https://i.ibb.co/924T2Wv/night.jpg')";
      greetString = 'Good Evening.';
      colorString = 'white';
    }
    this.setState({
      greeting: greetString,
      image: imageString,
      color: colorString
    });
  }

  saveBackground (bg) {
    if(!this.bg){
      this.bg = document.body.style['background-image'];
    }
  }

  render() {
    const divStyle = {
      color: this.state.color
    };
    let bg = document.body.style['background-image'];
    this.saveBackground(bg);
    document.body.style['background-image'] = this.state.image;

    return (
      <div id="fast-app" style={divStyle} >
        <time id="time">{this.state.time}</time>
        <span id="greeting">{this.state.greeting}</span>
      </div>

    )
  }
}

export default connect()(AppClock);
















/*
brad
oscar

*/