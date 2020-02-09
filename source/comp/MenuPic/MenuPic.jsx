import React from 'react';
import { connect } from 'react-redux';
import './MenuPic.css';

class MenuPic extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    let pic = this.props.User.current.pic_url;
    let classes = 'MenuPic';

    if(!pic) {
      pic = 'https://i.imgur.com/GHJVd0z.png';
      classes += ' light';
    }

    return (
      <img className = {classes} src = {pic}>
      </img>
    )
  }
}

const mapStateToProps = state => {
  return {
    Menu: state.Menu,
    User: state.User
  }
}

export default connect(mapStateToProps)(MenuPic);