import React from 'react';
import './Image.css';
import { connect } from 'react-redux';


class Image extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // id={bm.id + 'a'}
    console.log(this.props.URL.domain)
    return (
      <img id ='rimage' src={this.props.URL.domain + 'https://www.google.com/s2/favicons?domain='} >
      </img>
    )
  }
}

 // id={this.props.Apex.current

const mapStateToProps = state => {
  return {
    URL: state.URL,
    User: state.User
  }
}

export default connect(mapStateToProps)(Image);