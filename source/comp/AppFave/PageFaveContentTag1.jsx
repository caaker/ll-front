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

    // only render if the user clicked the menu for tag1
    const tag1 = this.props.tag1;
    const current = this.props.MenuFave.current;

    // access to mySQL and MongoDB from Redux store via props
    const bookmarks = this.props.Bookmarks.bookmarks;
    const domains = this.props.Domains.domains;

    // Redux store will enforce an object : object : array structure for both bookmarks and domains
    // Combine    
    let combinedDB = {
      ...domains,
      ...bookmarks
    };

    if(!combinedDB[tag1]) {
      return null;
    }

    const render = Object.keys(combinedDB[tag1]).map((tag0) =>
      <PageFaveContentTag1Tag0 tag0={tag0} key={tag0} bookmarks={combinedDB[tag1][tag0]} />
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

export default connect(mapStateToProps)(PageFaveContentTag1);


    // const search = this.props.Search.current;

        // const bookmarks = Tree.filterByTag(this.props.Bookmarks.bookmarks, search);
