import React from 'react';
import { connect } from 'react-redux';
import './AppClock.css';

class AppClock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      time: '00:00:00 AM',
      greeting: 'Hello ',
      image: 'none',
      color: 'white'
    }
    this.id = 0;   // holds timer
    this.bg = '';  // hold previous body background image
  }

  componentDidMount () {
    this.runTime();
    this.setImageAndGreet();
  }
  
  componentWillUnmount() {
    clearTimeout(this.id);
    document.body.style['background-image'] = this.bg;
  }

  runTime() {
    const interval = 10000; // every 10 seconds
    const today = new Date();
    const min = today.getMinutes();
    let hour = today.getHours();
    const amPm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    let timeString = `${hour}:${this.addZero(min)} ${amPm}`;
    this.setState({ 
      date: today,
      time: timeString 
    });
    this.id = setTimeout(this.runTime.bind(this), interval);
  }

  addZero(number) {
    return (parseInt(number, 10) < 10 ? '0' : '') + number;
  }

  // only needs to happen on hour change ...
  setImageAndGreet(){    
    let hour = this.state.date.getHours();
    let more = '';
    let imageString = '';
    let greetString = '';
    let colorString = 'black';
    if (hour < 12) {
      imageString = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
      greetString = 'Good Morning.' + more;
    } else if (hour < 18) {
      imageString = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
      greetString = 'Good Afternoon.' + more;
    } else {
      imageString = "url('https://i.ibb.co/924T2Wv/night.jpg')";
      greetString = 'Good Evening.' + more;
      colorString = 'white';
    }

    this.setState({
      greeting: greetString,
      image: imageString,
      color: colorString
    })
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
    
    let bg = document.body.style['background-image']
    
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
