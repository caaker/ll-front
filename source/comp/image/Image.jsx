import React from 'react';
import './Image.css';
import { connect } from 'react-redux';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img id ='rimage' src={'https://www.google.com/s2/favicons?domain=' + this.props.URL.domain} />
    )
  }
}

const mapStateToProps = state => {
  return {
    URL: state.URL,
    User: state.User
  }
}

export default connect(mapStateToProps)(Image);