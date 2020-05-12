import React from 'react';
import { connect } from 'react-redux';
import './AppClock.css';
import arc from '@arcarc/arc';
import Orb from './Orb.jsx';

//foo-1-2-3
class AppClock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: '12:00:00 AM',
      greeting: 'Hello ',
      image: 'none',
      color: 'white'
    }
    this.bg = '';                  // hold previous body background image
    this.interval = 1000;         //  holds clock update frequency - 1 seconds
  }

  componentDidMount () {
    this.id = setInterval(()=>{
      this.runIntervals();
    }, this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.id);
    document.body.style['background-image'] = this.bg;
  }

  runIntervals() {
    this.runTime();
    this.runImage();    
  }

  runTime() {
    // const time1 = arc.getTime(); // private implementation of toLocaleTimeString
    const time2 = (new Date()).toLocaleTimeString();
    this.setState({
      time: time2
    });
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

    this.saveBackground(document.body.style['background-image']);
    document.body.style['background-image'] = this.state.image;

    return (
      <div id="fast-app" style={divStyle} >
        
        <Orb></Orb>

        <time id="time">{this.state.time}</time>
        
        <span id="greeting">{this.state.greeting}</span>

      </div>

    )
  }
}

export default connect()(AppClock);