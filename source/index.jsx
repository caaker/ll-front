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
    let app = this.props.Men.current;
    return (
      <div id='app_hold'>
        <F1Apex/>
        {(app === 'Clock') && <FastApp/>}
        {(app === 'Favicons') && <FaviconApp/>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    App: state.App,
    Men: state.Men
  }
}
const AppRedux = connect(mapStateToProps)(App);
ReactDOM.render(
  <Provider store={store}>
    <AppRedux></AppRedux>
  </Provider>
, document.getElementById('app'));
