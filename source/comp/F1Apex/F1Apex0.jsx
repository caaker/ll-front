
import React from 'react';
import { connect } from 'react-redux';
import './F1Apex0.css';

class F1Apex0 extends React.Component {
  constructor(props) {
    super(props);
  }

  searchClicked = (id) => {
    if(this.props.Menu.current !== 'splash') {
      this.props.dispatch({type: 'toggleApex'});
    } else {

    }
  }

  render () {
    let component_on = false; 
    if(this.props.Menu.current === 'Articles'){
      component_on = true;
    }
    return (
      <div className={component_on ? 'apex0-1_on' : 'apex0-1_off'} 
           id={this.props.Apex.current ? 'apex0-1_color1' : 'apex0-1_color2'}>

        <div className='apex_inner' id='apex0-2'>
          
          <svg
            onClick={this.searchClicked}
            className='circular_arrows'
            id={this.props.Apex.current ? 'common_icon_rotate' : 'common_icon_still'}
            xmlns="http://www.w3.org/2000/svg" 
            width="18"
            height="18"
            viewBox="0 0 24 24" 
            >
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
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
