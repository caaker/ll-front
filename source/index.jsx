import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider, connect } from 'react-redux';
import store        from './redux/store';
import F1Apex       from './comp/Apex/F1Apex.jsx';

import Header       from './classes/class.Header.js';
import FaviconApp   from './FaviconApp.jsx';
import FastApp      from './FastApp.jsx'


import './index.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id='app_hold'>
        <F1Apex/>
        {this.props.App.current && <FastApp/>}
        {!this.props.App.current && <FaviconApp/>}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    App: state.App
  }
}
const AppRedux = connect(mapStateToProps)(App);
ReactDOM.render(
  <Provider store={store}>
    <AppRedux></AppRedux>
  </Provider>
, document.getElementById('app'));
