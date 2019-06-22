import React from 'react';
import { connect } from 'react-redux';
import './Menu.css';

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  clickHandler = () => {
    this.props.dispatch({type: 'toggleMenu'});
  }
// toggleMenu, updateMenu, closeMenu
  render() {
    return (
      <svg 
        id = "menu_top"
        onClick = {this.clickHandler}  
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     Property: state.Property
//   }
// }

export default connect()(Menu);