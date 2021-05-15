import React from 'react';
import { connect } from 'react-redux';
import './UserAccount.css';

class UserAccount extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id = "user-container">
        <div id = "user-container-2">
          <img id = "user-image" src={this.props.User.current.pic_url}/>
          <p id = "user-name">{this.props.User.current.name}</p>
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
