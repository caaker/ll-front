import React from 'react';
import { connect } from 'react-redux';
import './F1Apex0.css';

class F1Apex0 extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler = (id) => {
    if(this.props.Menu.current !== 'splash') {
      this.props.dispatch({type: 'toggleApex'});
    } else {

    }
  }

  render () {
    let component_on = true;
    return (
      <div className={component_on ? 'apex0-1_on' : 'apex0-1_off'} id={this.props.Apex.current ? 'apex0-1_color1' : 'apex0-1_color2'}>
        <div className='apex_inner' id='apex0-2'>
          
          <svg
            onClick={this.clickHandler} 
            className='circular_arrows'
            id={this.props.Apex.current ? 'common_icon_rotate' : 'common_icon_still'}
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24">
            <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    Menu: state.Menu,
    Apex: state.Apex
  }
}

export default connect(mapStateToProps)(F1Apex0);

// https://jsfiddle.net/u0sdra4e/1/