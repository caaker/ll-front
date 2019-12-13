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
import F1           from './comp/F1/F1.jsx';
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
    // console.log("DEBUG: io() ran");

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





  // findStatus = (results) => {
  //   if(results[results.length - 1].id_google){
  //     const user = results.slice(-1);
  //     this.loggedIn(user);
  //   } else {
  //     this.notLoggedIn();
  //   }
  // }
 
  // notLoggedIn = () => {
  //   window.setTimeout(() => {
  //   }, 4000);
  //   window.setTimeout(() => {
  //   }, 8000);
  // }

  // loggedIn = (user) => {
  //   this.props.dispatch({ type: 'setUser', current: user[0] });
  // }