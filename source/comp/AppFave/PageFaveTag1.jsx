import React from 'react';
import { connect } from 'react-redux';
import PageFaveTag1Tag0 from './PageFaveTag1Tag0.jsx';
import './PageFaveTag1.css';

class PageFaveTag1 extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    const tag1 = this.props.tag1;
    const current = this.props.MenuFave.current;
    
    const bookmarks = this.props.Bookmarks.bookmarks;
    const domains = this.props.Domains.domains;

    const combinedDB = {
      ...domains,
      ...bookmarks
    };

    if(!combinedDB[tag1]) {
      return null;
    }

    const render = Object.keys(combinedDB[tag1]).map((tag0) =>
      <PageFaveTag1Tag0 tag0={tag0} key={tag0} bookmarks={combinedDB[tag1][tag0]} />
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
    MenuFave: state.MenuFave,
    Domains: state.Domains
  }
}

export default connect(mapStateToProps)(PageFaveTag1);

// add search later
// const search = this.props.Search.current;
// const bookmarks = Tree.filterByTag(this.props.Bookmarks.bookmarks, search);
// import Tree from '../../classes/class.Tree.js';
