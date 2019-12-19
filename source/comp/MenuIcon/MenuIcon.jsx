import React from 'react';
import { connect } from 'react-redux';
import './MenuIcon.css';

class MenuIcon extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <img class = "MenuIcon" src = "">
      </img>
    )
  }
}

const mapStateToProps = state => {
  return {
    Menu: state.Menu
  }
}

export default connect(mapStateToProps)(MenuIcon);

/*
test link
https://lh3.googleusercontent.com/-c45-MnX8G-M/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-iii2mWcBxmlpNM15nbV7NaORuuJA/mo/photo.jpg?sz=50
*/

/*
codepen - https://codepen.io/caaker/pen/abzpqep
*/
