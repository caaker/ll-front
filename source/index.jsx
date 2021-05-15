import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import store        from './redux/store';

import Header       from './class.Header.js';
import F1           from './comp/F1/F1.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("DEBUG: L0 : index");
    return (
      <F1/>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>
, document.getElementById('app'));


