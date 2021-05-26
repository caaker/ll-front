import React from 'react';
import { connect } from 'react-redux';

import './MenuBoxItem.css';

class MenuBoxItem extends React.Component {

  constructor(props) {
    super(props);
  }

  clickHandler = (item) => {
    this.props.dispatch({type: 'updateMenu', current: item });
    this.props.dispatch({type: 'closeMenu'});
  }

  render() {
    console.log(this.props.menu_name)

    return (
      <span className="holder" onClick = {this.clickHandler.bind(this, this.props.name)}>
        {this.props.children}
        <p className='p11'>{this.props.menu_name || this.props.name}</p>
      </span>
    )
  }
}

const mapStateToProps = state => {
  return {
    Menu: state.Menu
  }
}

export default connect(mapStateToProps)(MenuBoxItem);

