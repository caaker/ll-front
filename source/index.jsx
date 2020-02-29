import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider, connect } from 'react-redux';
import store        from './redux/store';
import './index.css';

// Dynamic header, beacon for testing sockets and check login status
import Header       from './classes/class.Header.js';

// Framework 1
import F1           from './comp/F1/F1.jsx';

// Data
import Data         from './Data.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <F1/>
        <Data/>
      </div>
    )
  }
}

// Get the top element in the body with id 'app'
const app_element = document.getElementById('app');

// Render to the top element('app') using ReactDOM
// Use Provider to make the redux store accessible to all components below it
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>
, app_element);
