import React from 'react';
import './Image.css';
import { connect } from 'react-redux';


class Image extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.URL.domain)
    return (
      <img id ="rimage" src="https://www.google.com/s2/favicons?domain={this.props.URL.domain}">
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