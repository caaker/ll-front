import React from 'react';
import { connect } from 'react-redux';
import PageFaveContentTag1 from './PageFaveContentTag1.jsx';
import './PageFaveContent.css';


class PageFaveContent extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div id='bm_hold'>
        <PageFaveContentTag1 tag1="all" />
        <PageFaveContentTag1 tag1="health" />
      </div>
    );
  }
}
 
export default connect()(PageFaveContent);

        // <PageFaveContentTag1 tag1="news" />
        // <PageFaveContentTag1 tag1="software" />