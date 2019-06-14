import React       from 'react';
import ReactDOM    from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './redux/store';


import Input       from './comp/input/Input.jsx';
import Paragraph   from './comp/paragraph/Paragraph.jsx';
import Image       from './comp/image/Image.jsx';
import './index.css';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id='app_hold'>
        <Paragraph/>
        <Image/>

        <Input/>
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
