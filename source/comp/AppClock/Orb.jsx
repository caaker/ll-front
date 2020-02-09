import './Orb.css';
import React from 'react';
import io from 'socket.io-client';

class Orb extends React.Component {
  constructor(props) {
    super(props);
    this.listenForBeacon();
    this.state = {
      class_string: 'circle white',
      i: 0
    }
  }

  updateState() {
    this.setState((prev) => {
      let index = prev.i;
      index++;
      const classes = [
        'circle white', 
        'circle blue'
      ];
      if(index === classes.length) {
        index = 0;
      }
      return {
        i: index,
        class_string: classes[index]
      };
    });
  }

  listenForBeacon () {
    const socket = io();

    socket.on('error', (error) => {
      console.log("DEBUG: socket error occurred", error);
    });

    socket.on('beacon', (data) => {
      this.updateState();
      console.log('DEBUG: Server Time: ', data);
    });

  }

  render () {
    return (
      <figure className={this.state.class_string}></figure>
    )
  }

}

export default Orb;