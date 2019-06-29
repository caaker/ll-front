import React from 'react';
import './P1.css';

class P1 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let value = this.props.value;
    return (
      <p id ="rp1">
        {value}
      </p>
    )
  }
}

export default P1;