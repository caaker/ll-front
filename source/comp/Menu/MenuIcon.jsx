import React from 'react';
import { connect } from 'react-redux';
import './MenuIcon.css';

class MenuIcon extends React.Component {

  constructor(props) {
    super(props);
  }

  clickHandler = () => {
    this.props.dispatch({type: 'toggleAppStyle'});
  }

  render() {
    const state = this.props.Style.current;
    return (
      <img className = 'favicon_all' 
           id = {state === true ? 'favicon_01' : 'favicon_90'} 
           onClick = {this.clickHandler} src='dist/images/svg/favicon.svg'/>
    )
  }
} 

const mapStateToProps = state => {
  return {
    Style: state.Style
  }
}

export default connect(mapStateToProps)(MenuIcon);
