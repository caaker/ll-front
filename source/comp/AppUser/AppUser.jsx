import React from 'react';
import { connect } from 'react-redux';
import UserAuth    from './UserAuth.jsx';
import UserAccount from './UserAccount.jsx'

class AppUser extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const user = this.props.User.current;
    return (
      <div>
        {user && <UserAccount></UserAccount>}
        {!user && <UserAuth></UserAuth>}
      </div>
    );
  }
}

const Mapper = state => {
  return {
    User: state.User
  }
}

export default connect(Mapper)(AppUser);
