import React       from 'react';
import ReactDOM    from 'react-dom';

import Input       from './comp/input/Input.jsx';
import Paragraph   from './comp/paragraph/Paragraph.jsx';
import Image       from './comp/image/Image.jsx';
import Output      from './comp/output/Output.jsx';

import './FaviconApp.css';

class FaviconApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id ="favicon-app">
        <Paragraph/>
        <Image/>
        <Output/>
        <Input/>
      </div>
    )
  }
}

export default FaviconApp;