// This file is primarily used to
//   - connect the Redux Store to <div id='app'>
//   - load the dynamic header
//   - load page wide CSS

// Libs
import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider, connect } from 'react-redux';
import store        from './redux/store';
import io from 'socket.io-client';

// User
import Header       from './classes/class.Header.js';
import F1           from './comp/Apex/F1.jsx';
import './index.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.fetchUser();
    this.setUpSockets();
  }
 
   setUpSockets () {
    // https://socket.io/docs/client-api

    this.socket = io();

    // built in event
    this.socket.on('error', (error) => {
      console.log("DEBUG: socket error occurred");
    });
    
    // user event
    this.socket.on('beacon', (data) => {
      console.log('DEBUG: Server Time: ', data);
    });
    // console.log("DEBUG: socket created: event handler ready ");
  }

  fetchUser () {
    const options = {
      credentials: 'include'
    };
    fetch("/api/user", options)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      // console.log(results); // currently returning false
      // this.props.dispatch({type: 'updateBookmarks', bookmarks: results});
      // this.findStatus(results);
    })
    .catch((err) => {
      // this.notLoggedIn();
      // console.log('DEBUG: fetch /api/items error');
    });
  }

  render () {
    return (
      <F1/>
    )
  }
}

const mapStateToProps = state => {
  return {
    Menu: state.Menu
  }
}

const AppRedux = connect(mapStateToProps)(App);
ReactDOM.render(
  <Provider store={store}>
    <AppRedux></AppRedux>
  </Provider>
, document.getElementById('app'));