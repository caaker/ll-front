import React       from 'react';
import ReactDOM    from 'react-dom';

import Input       from './input/Input.jsx';
import Paragraph   from './paragraph/Paragraph.jsx';
import Image       from './image/Image.jsx';
import Output      from './output/Output.jsx';

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