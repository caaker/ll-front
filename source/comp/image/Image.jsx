import React from 'react';
import './Image.css';
import { connect } from 'react-redux';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let domain = this.props.URL.current.domain; 
    return (
      <img id ='rimage' src={'https://www.google.com/s2/favicons?domain=' + domain} />
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