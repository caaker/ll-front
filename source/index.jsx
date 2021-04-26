import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import store        from './redux/store';
import './index.css';
import Header       from './classes/class.Header.js';
import F1           from './comp/F1/F1.jsx';
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

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>
, document.getElementById('app'));
