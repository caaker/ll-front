import React from 'react';
import { connect } from 'react-redux';

import './MenuItem.css';

class MenuItem extends React.Component {

  constructor(props) {
    super(props);
  }

  clickHandler = (item) => {
    this.props.dispatch({type: 'updateMenu', current: item });
    this.props.dispatch({type: 'closeMenu'});
  }

  render() {
    return (
      <span className="holder" onClick = {this.clickHandler.bind(this, this.props.name)}>
        {this.props.children}
        <p className='p11'>{this.props.name}</p>
      </span>
    )
  }
}

const mapStateToProps = state => {
  return {
    Menu: state.Menu
  }
}

export default connect(mapStateToProps)(MenuItem);

