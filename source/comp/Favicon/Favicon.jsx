import React from 'react';
import './Favicon.css';
import { connect } from 'react-redux';

class Favicon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let domain = this.props.URL.current.domain; 
    return (
      <img id ='rimage' src={'https://www.google.com/s2/favicons?domain=' + (domain || 'test.com')} />
    )
  }
}

const mapStateToProps = state => {
  return {
    URL: state.URL
  }
}
export default connect(mapStateToProps)(Favicon);