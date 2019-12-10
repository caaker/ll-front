import React from 'react';
import F1Apex0 from './F1Apex0.jsx';
import F1Apex1 from './F1Apex1.jsx';
import F1Apex2 from './F1Apex2.jsx';
import './F1Apex.css';

class F1Apex extends React.Component {
  constructor(props) {
    super(props);
   }

  render () {
    return (
      <div id = 'apex_hold'>
        <F1Apex0/>
        <F1Apex1/>
        <F1Apex2/>
      </div>
    )
  }
}

export default F1Apex;