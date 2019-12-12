import React from 'react';
import { connect } from 'react-redux';
import './AppChat.css';
import io from 'socket.io-client';

class AppChat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.setUpSockets();
  }

  setUpSockets () {
    console.log("DEBUG: Sockets Ready")
    this.socket = io('http://localhost:3000');
    this.socket.on('beacon', (data) => {
      console.log('DEBUG: Beacon Received: ', data);
    });
  }

  componentDidMount () {
  }

  componentWillUnmount() {
  }


  render() {
    return (

      <div id="chat-top">
        <div id="chat-window">
          <div id="output"></div>
          <div id="feedback"></div>
        </div>
        <input id="handle" type="text" placeholder="Handle" />
        <input id="message" type="text" placeholder="Message" />        
        <button id="send">Send</button>
      </div>

    )
  }
}

export default connect()(AppChat);

// // Make Connection
// var socket = io.connect('http://localhost:4000');

// // DOM
// var message = document.getElementById('message');
// var handle = document.getElementById('handle');
// var btn = document.getElementById('send');
// var output = document.getElementById('output');
// var feedback = document.getElementById('feedback');

// btn.addEventListener('click', function(){
//   socket.emit('chat', {
//     message: message.value,
//     handle: handle.value
//   });
//   message.value = "";
// });

// socket.on('chat', function(data){
//   feedback.innerHTML = '';
//   output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
// });