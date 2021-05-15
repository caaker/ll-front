import React from 'react';
import { connect } from 'react-redux';
import YT1T0 from './YT1T0.jsx';
import './YT1.css';

class YT1 extends React.Component {
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

    // loop through level - tag1 to get all level - tag0
    const render = Object.keys(combinedDB[tag1]).map((tag0) =>
      <YT1T0 tag0={tag0} key={tag0} bookmarks={combinedDB[tag1][tag0]} />
    );

    return (
      <div className="T1_page" id={current === tag1 ? 'T1_page_show' : 'T1_page_hide'}> 
        {render} 
      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    Bookmarks: state.Bookmarks,
    MenuFave: state.MenuFave,
    Domains: state.Domains
  }
}

export default connect(mapStateToProps)(YT1);

// add search later
//    Search: state.Search,

// const search = this.props.Search.current;
// const bookmarks = Tree.filterByTag(this.props.Bookmarks.bookmarks, search);
// import Tree from '../../classes/class.Tree.js';
