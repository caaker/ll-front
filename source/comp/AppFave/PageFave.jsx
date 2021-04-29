import React from 'react';
import { connect } from 'react-redux';
import PageFaveTag1 from './PageFaveTag1.jsx';
import './PageFave.css';


class PageFave extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div id='bm_hold'>
        <PageFaveTag1 tag1="all" />
        <PageFaveTag1 tag1="health" />
      </div>
    );
  }
}
 
export default connect()(PageFave);

// Can there be a better way to add both menu item and page at the same time?
// <PageFaveContentTag1 tag1="news" />
// <PageFaveContentTag1 tag1="software" />