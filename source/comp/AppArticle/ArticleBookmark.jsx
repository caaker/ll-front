import React from 'react';
import { connect } from 'react-redux';
import './ArticleBookmark.css';
// import io from 'socket.io-client';

class ArticleBookmark extends React.Component {

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
              <img className = 'bookmark_image_new' src='dist/images/svg/on_bookmark_filled.svg'/>
            </div>
            <div className="card__face card__face--back">
              <img className = 'bookmark_image_new' src='dist/images/svg/on_bookmark.svg'/>
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

export default connect()(ArticleBookmark);

/*
on_bookmark.svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/><path d="M0 0h24v24H0z" fill="none"/></svg>

on_bookmark_filled.svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
*/