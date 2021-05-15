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

  getStyle = () => {
    let apex_style;

    // this is here for testing how Redux effects rendering
    // this is a test component
    if(this.props.App){
      apex_style = this.props.App.current;  
    }

    // return the style based on the user clicking the icon
    return apex_style ? 'apex_style_99' : 'apex_style_45'
  }

  render () {
    console.log("DEBUG: L2 : F1-Apex ");
    return (
      <div className ='apex_hold' id={this.getStyle()} >
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

