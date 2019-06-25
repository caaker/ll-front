import React from 'react';
import { connect } from 'react-redux';
import BoxAuth from '../BoxAuth/BoxAuth.jsx';

class AppUser extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <BoxAuth/>
    )
  }
}

export default connect()(AppUser);
