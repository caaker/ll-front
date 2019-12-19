import React from 'react';
import { connect } from 'react-redux';
import Tree from '../../classes/class.Tree.js';
import PageFaveContentTag1Tag0 from './PageFaveContentTag1Tag0.jsx';
import './PageFaveContentTag1.css';

class PageFaveContentTag1 extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    let bm = this.props.Bookmarks.bookmarks;
    let search = this.props.Search.current;
    let current = this.props.MenuFave.current;
    let tag1 = this.props.tag1;
    bm = Tree.filterByTag(bm, search);
    let render = Object.keys(bm[tag1]).map((tag0) =>
      <PageFaveContentTag1Tag0 tag0={tag0} key={tag0} bookmarks={bm[tag1][tag0]} />
    );
    return (
      <div className="bm_page_super" id={current===tag1 ? 'bm_page_super_show' : 'bm_page_super_hide'}> 
        {render} 
      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    Search: state.Search,
    Bookmarks: state.Bookmarks,
    MenuFave: state.MenuFave
  }
}

export default connect(mapStateToProps)(PageFaveContentTag1);