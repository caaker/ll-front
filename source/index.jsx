// Libs
import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider, connect } from 'react-redux';
import store        from './redux/store';

// User
import Header       from './classes/class.Header.js';
import F1Apex       from './comp/Apex/F1Apex.jsx';
import FaviconApp   from './comp/FaviconApp.jsx';
import FastApp      from './comp/FastApp.jsx'

// UserOld
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

  renderBreak () {
    let app = this.props.Menu.current;
    return (
      <div id='app_hold'>
        <F1Apex/>
        {(true === 'Clock') && <FastApp/>}
        {(false === 'Favicons') && <FaviconApp/>}
      </div>
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
