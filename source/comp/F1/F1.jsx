// This file needs a massive re-factor into two files 
// - logic for logging in
// - page rendering
//

import React from 'react';
import { connect } from 'react-redux';

import F1Apex      from '../F1Apex/F1Apex.jsx';
import F1Page      from '../F1Page/F1Page.jsx';
import F1Footer    from '../F1Footer/F1Footer.jsx';


import './F1.css';

class F1 extends React.Component { 
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id='app_hold'>
        <F1Apex/>
        <F1Page/>
        <F1Footer/>
      </div>
    )
  }
}

export default connect()(F1);