// This file is primarily used to
//   - connect the Redux Store to <div id='app'>
//   - load the dynamic header
//   - load page wide CSS

// Libs
import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider, connect } from 'react-redux';
import store        from './redux/store';

// User
import Header       from './classes/class.Header.js';
import F1       from './comp/F1.jsx';
import './index.css';

class App extends React.Component {

  constructor(props) {
    super(props);
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
