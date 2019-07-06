import React from 'react';
import { connect } from 'react-redux';
import './AppChat.css';

class AppChat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount () {
  }

  componentWillUnmount() {
  }


  render() {
    return (

      <div id="mario-chat">
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