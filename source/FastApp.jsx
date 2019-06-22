import React from 'react';
import { connect } from 'react-redux';
import './FastApp.css';

class FastApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello ',
      time: '00:00:00 AM',
      image: 'none'
    }
  }
  componentDidMount () {
    this.setImageAndGreet();
    this.showTime();  
  }
  
  componentWillUnmount() {
    clearTimeout(this.id);
  }

  showTime() {
    const showAmPm = true;
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    const amPm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    let timeString = `${hour}:${this.addZero(min)} ${showAmPm ? amPm : ''}`;
    this.setState({
      time: timeString
    });
    this.id = setTimeout(this.showTime.bind(this), 1000);
    // :${this.addZero(sec)}
  }

  addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }

  setImageAndGreet(){
    let today = new Date();
    let hour = today.getHours();
    // let more = "Your fast began at "
    let more = '';
    let imageString = '';
    let greetString = '';
    let colorString = '';

    if (hour < 12) {
      imageString = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
      greetString = 'Good Morning. ' + more;
    } else if (hour < 18) {
      imageString = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
      greetString = 'Good Afternoon. ' + more;
    } else {
      imageString = "url('https://i.ibb.co/924T2Wv/night.jpg')";
      greetString = 'Good Evening. ' + more;
      colorString = 'white';
    }

    this.setState({
      greeting: greetString,
      image: imageString,
      color: colorString
    })
  }

  render() {
    const sectionStyle = {
      backgroundImage: this.state.image,
      color: this.state.color
    };
    return (
      <div id="fast-app" style={ sectionStyle } >
        <time id="time">{this.state.time}</time>
        <h1>
          <span id="greeting">{this.state.greeting}</span>
        </h1>
      </div>

    )
  }
}

export default connect()(FastApp);
