import React from 'react';
import { connect } from 'react-redux';
import './MenuIcon.css';

class MenuIcon extends React.Component {

  constructor(props) {
    super(props);
  }

  clickHandler = () => {
    this.props.dispatch({type: 'updateApp'});
  }

  render() {
    return (
      <img className = 'common_favicon_all' 
           id = {true ? 'common_favicon_rotate' : 'common_favicon_still'} 
           onClick = {this.clickHandler} src='dist/images/svg/favicon.svg'/>
    )
  }
} 

const mapStateToProps = state => {
  return {
    SideBar: state.SideBar
  }
}

export default connect(mapStateToProps)(MenuIcon);
