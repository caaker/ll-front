import React from 'react';
import { connect } from 'react-redux';
import './Icon.css';

class Icon extends React.Component {

  constructor(props) {
    super(props);
  }

  clickHandler = () => {
    this.props.dispatch({type: 'updateApp'});
  }

  render() {
    return (
      <img className = 'common_icon' 
           id = {true ? 'common_icon_rotate' : 'common_icon_still'} 
           onClick = {this.clickHandler} src='dist/images/svg/favicon.svg'/>
    )
  }
}

const mapStateToProps = state => {
  return {
    SideBar: state.SideBar
  }
}

export default connect(mapStateToProps)(Icon);
