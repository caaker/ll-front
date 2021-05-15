import React                 from 'react';
import { connect }           from 'react-redux';
import M                     from '../Menu/M.jsx'

import './F1Apex2.css';


class F1Apex2 extends React.Component {
  constructor(props) {
    super(props);
   }

  render () { 
    console.log("DEBUG: L3 : F1-Apex-2 ");
    return (
      <div className='apex2-1'> 
        <div className='apex_inner' id='apex2-2'>
           <M></M>
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

export default connect(mapStateToProps)(F1Apex2);


