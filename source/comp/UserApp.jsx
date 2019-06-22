import React from 'react';
import { connect } from 'react-redux';
import BoxAuth from './BoxAuth/BoxAuth.jsx';

class UserApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <BoxAuth/>
    )
  }
}

export default connect()(UserApp);
