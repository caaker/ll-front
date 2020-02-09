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

  bounce(){
    // apply css
    this.setState((prev) => {
      return {
        class_string: 'circle white bounce',
      };
    });

    setTimeout(()=>{
      this.setState((prev) => {
        return {
          class_string: 'circle white',
        };
      });
    }, 1000);
  }

  listenForBeacon () {
    const socket = io();

    socket.on('error', (error) => {
      console.log("DEBUG: socket error occurred", error);
    });

    socket.on('beacon', (data) => {
      // this.updateState();
      this.bounce();
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



  // updateState() {
  //   this.setState((prev) => {
  //     let index = prev.i;
  //     index++;
  //     const classes = [
  //       'circle white bounce', 
  //       'circle blue bounce'
  //     ];
  //     if(index === classes.length) {
  //       index = 0;
  //     }
  //     return {
  //       i: index,
  //       class_string: classes[index]
  //     };
  //   });
  // }
