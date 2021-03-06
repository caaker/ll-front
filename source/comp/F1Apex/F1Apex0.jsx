
import React from 'react';
import { connect } from 'react-redux';
import './F1Apex0.css';

class F1Apex0 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rotate: false};
  }

  searchClicked = (id) => {
    this.props.dispatch({type: 'toggleApex1'});
    this.setState((previous) => {
      return {rotate: !previous.rotate};
    });
  }

  render () {
    let component_on = false;
    if(this.props.Menu.current === 'Articles'){
      component_on = true;
    }
    console.log("DEBUG: L3 : F1-Apex-0 ");
    
    return (
      <div className={component_on ? 'apex0-1_on' : 'apex0-1_off'} >
        <div className='apex_inner' id='apex0-2'>
          <svg
            onClick={this.searchClicked}
            className='search_icon_all'
            id={this.state.rotate ? 'search_icon_rotate' : 'search_icon_still'}
            xmlns="http://www.w3.org/2000/svg" 
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
    Menu: state.Menu
  }
}

export default connect(mapStateToProps)(F1Apex0);
