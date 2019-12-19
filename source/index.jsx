import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider, connect } from 'react-redux';
import store        from './redux/store';
import './index.css';

// Dynamic header, beacon for testing sockets and check login status
import Header       from './classes/class.Header.js';
import listenForBeacon from './listenForBeacon';

// Framework 1
import F1           from './comp/F1/F1.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    listenForBeacon();
    this.getUser();
    this.getItems();
  }

  getUser () {    
    const options = {
      credentials: 'include'
    };
    fetch("/api/user", options)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
    })
    .catch((err) => {
    });
  }

  getItems () {
    const options = {
      credentials: 'include'
    };
    fetch("/api/items", options)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      this.props.dispatch({type: 'updateBookmarks', bookmarks: results});
    })
    .catch((err) => {
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

// Connect the redux store
const AppRedux = connect(mapStateToProps)(App);
ReactDOM.render(
  <Provider store={store}>
    <AppRedux></AppRedux>
  </Provider>
, document.getElementById('app'));