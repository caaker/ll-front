import React from 'react';
import { connect } from 'react-redux';
import './F1Apex1.css';
import Search from '../Search/Search.jsx';

class F1Apex1 extends React.Component {

  constructor(props) {
    super(props);
   }

  render () {
    const admin = (this.props.User.current._id === '5eebf1dc9148400351a49dd0');
    return (
		  <div className='apex1-1' id={this.props.Apex.current ? 'apex1-1_show' : 'apex1-1_hide'}>
		    <div className='apex_inner' id='apex1-2'>
          {true && <Search/>}
		    </div>
		  </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    User:  state.User,
    Apex: state.Apex
  }
}

export default connect(mapStateToProps)(F1Apex1);
