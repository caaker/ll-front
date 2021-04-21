import React from 'react';
import { connect } from 'react-redux';
import './UserAccount.css';

class UserAccount extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const user = this.props.User.current;
    return (
      <div id = "user-container">
        <div id = "user-container-2">
          <img id = "user-image" src = "https://lh3.googleusercontent.com/a-/AOh14GiReqt-hbfr-UFzWM9gePMtv1vLMPtaACWHpn1e5Q"/>
          <p id = "user-name">Joe Coffee</p>
          <a id="user-button" href="/auth/logout">Logoff</a>
        </div>
      </div>
    );
  }
}

const Mapper = state => {
  return {
    User: state.User
  }
}

export default connect(Mapper)(UserAccount);
