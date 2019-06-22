import React from 'react';
import { connect } from 'react-redux';
import './ComponentBookmark.css';
// import io from 'socket.io-client';

class ComponentBookmark extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      front: true,
      ready: true,
      count: this.props.count
    };

    // setup sockets and listen for emit_to_all
    // this.socket = io.connect();
    // this.socket.on('emit_to_all', this.receive);
  }

  send = () => {
    this.socket.emit('emit_to_all', {name: this.props.name, add: this.state.front});
  }

  receive = (value) => {
    if(value.name === this.props.name) {
      console.log('SOCKETS: receive', value);
      this.setState((prevState) => {
        return {
          count: value.add ? prevState.count + 1 : prevState.count - 1
        };
      });
    }
  }

  clickHandler = () => {
    if(this.state.ready){
      this.send();
      this.setState((prevState) => {
        return {
          front: !prevState.front,
          ready: false
        };
      });
      window.setTimeout(() => {
        this.setState({ready: true});
      }, 3000);
    } else {
    }
  }

  render() {
    return (
      <div className="bookmark_holder">
        <div className="scene" onClick = {this.clickHandler} >
          <div className={`card ${this.state.front && "is-flipped"}`}>
            <div className="card__face card__face--front"> 
              <img className = 'bookmark_image_new' src='images/svg/on_bookmark_filled.svg'/>
            </div>
            <div className="card__face card__face--back">
              <img className = 'bookmark_image_new' src='images/svg/on_bookmark.svg'/>
            </div>
          </div>
        </div>
        <div className="bookmark_count">
          {this.state.count}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    Modal: state.Modal,
    User: state.User
  }
}

export default connect(mapStateToProps)(ComponentBookmark);
