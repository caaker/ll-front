import React from 'react';
import { connect } from 'react-redux';

// left
import Icon from '../icon/Icon.jsx';
// import F1MenuLeftButton from '../LeftButton/F1MenuLeftButton.jsx';

// center
// import F1MenuSearch from '../F1MenuSearch.jsx';

// right
// import F1MenuRight from '../MenuRight/F1MenuRight.jsx';

//
import './F1Apex2.css';


class F1Apex2 extends React.Component {
  constructor(props) {
    super(props);
   }

  render () {

    let user = this.props.User.current;
    let health = !this.props.Apex.current ? true : false;

    return (
      <div className='apex2-1'>
        <div className='apex_inner' id='apex2-2'>
          { true &&  <Icon/> }
          { false && <F1MenuLeftButton/> }
          { false && <F1MenuRight/> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    User: state.User,
    Apex: state.Apex
  }
}

export default connect(mapStateToProps)(F1Apex2);