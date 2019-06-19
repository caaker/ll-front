import React from 'react';
import { connect } from 'react-redux';
import './F1Apex1.css';
// import F1MenuSearch from '../F1MenuSearch.jsx';

class F1Apex1 extends React.Component {
  constructor(props) {
    super(props);
   }

  render () {
    return (
		  <div className='apex1-1' id={this.props.Apex.current ? 'apex1-1_show' : 'apex1-1_hide'}>
		    <div className='apex_inner' id='apex1-2'>
          {false && <F1MenuSearch/>}
		    </div>
		  </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    Apex: state.Apex
  }
}

export default connect(mapStateToProps)(F1Apex1);
