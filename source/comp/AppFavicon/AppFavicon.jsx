import React       from 'react';
import ReactDOM    from 'react-dom';

import Favicon     from '../Favicon/Favicon.jsx';
import Input       from '../Input/Input.jsx';
import P2          from '../P2/P2.jsx';
import Output      from '../Output/Output.jsx';

import './AppFavicon.css';

class AppFavicon extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id ="favicon-app">
        <P2/>
        <Favicon/>
        <Output/>
        <Input/>
      </div>
    )
  }
}

export default AppFavicon;