import React       from 'react';
import ReactDOM    from 'react-dom';
import { Provider, connect } from 'react-redux';
import store       from './redux/store';
import F1Apex      from './comp/Apex/F1Apex.jsx';
import FaviconApp  from './FaviconApp.jsx';


import './arc.css';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id='app_hold'>
        <F1Apex/>
        <FaviconApp/>
      </div>
    )
  }
}

const AppRedux = connect()(App);
ReactDOM.render(
  <Provider store={store}>
    <AppRedux></AppRedux>
  </Provider>
, document.getElementById('app'));
