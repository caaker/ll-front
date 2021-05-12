import React from 'react';
import { connect } from 'react-redux';

import F1Apex0 from './F1Apex0.jsx';
import F1Apex1 from './F1Apex1.jsx';
import F1Apex2 from './F1Apex2.jsx';
import './F1Apex.css';

class F1Apex extends React.Component {
  constructor(props) {
    super(props);
   }

  render () {
    const app_style = this.props.App.current;
    console.log(app_style);

    return (
      <div className = 'apex_hold'
           id = {app_style ? 'apex_style_99' : 'apex_style_45'}>
        <F1Apex0/>
        <F1Apex1/>
        <F1Apex2/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    App: state.App
  }
}


export default connect(mapStateToProps)(F1Apex);

