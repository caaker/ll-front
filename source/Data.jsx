import React        from 'react';
import { connect } from 'react-redux';

class Data extends React.Component {

  constructor(props) {
    super(props);
    this.getUser();
  }

  getUser () {    
    const options = {
      credentials: 'include'
    };
    fetch("/api/user", options)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      this.props.dispatch({type: 'setUser', current: results});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render () {
    return (
      <div></div>
    )
  }
}

export default connect()(Data);

