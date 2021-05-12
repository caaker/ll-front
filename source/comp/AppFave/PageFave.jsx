import React from 'react';
import { connect } from 'react-redux';
import YT1 from './YT1.jsx';
import './PageFave.css';


class PageFave extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div id='bm_hold'>
        <YT1 tag1="all" />
        <YT1 tag1="health" />
      </div>
    );
  }
}
 
export default connect()(PageFave);