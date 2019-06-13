import React from 'react';
import './Image.css';

class Image extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img id ="rimage" src="https://www.google.com/s2/favicons?domain=www.google.com">
      </img>
    )
  }
}

export default Image;