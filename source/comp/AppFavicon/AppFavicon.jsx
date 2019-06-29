import React       from 'react';
import ReactDOM    from 'react-dom';

import Image       from './image/Image.jsx';
import Input       from './input/Input.jsx';
import Paragraph   from './paragraph/Paragraph.jsx';
import Output      from './output/Output.jsx';

import './AppFavicon.css';

class AppFavicon extends React.Component {

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

export default AppFavicon;