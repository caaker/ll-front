import React        from 'react';
import { connect } from 'react-redux';

class Data extends React.Component {

  constructor(props) {
    super(props);
    this.getUser();
    this.getBookmarks();
    this.getArticles();
    this.debug = false;
  }

  getUser () {    
    const options = {
      credentials: 'include'
    };
    
    fetch("/users/user", options)
    .then((response) => {
      // console.log('getUser() responed');
      return response.json();
    })
    .then((results) => {
      if(results === "false"){
        results = false;
      }
      this.debug && console.log('Data.getUser()', results);
      this.props.dispatch({type: 'setUser', current: results});
    })
    .catch((err) => {
      console.log('DEBUG: /api/user endpoint failed : ', err);
    });
  }

  getBookmarks () {
    const options = {
      credentials: 'include'
    };
    //console.log('DEBUG: fetch() called for bookmarks');
    fetch("/bookmarks/bookmarks", options)
    .then((response) => {
      // console.log('DEBUG: response received for bookmarks : ');
      return response.json();
    })
    .then((results) => {
      this.debug && console.log('Data.getBookmarks()', results);
      this.props.dispatch({type: 'updateBookmarks', bookmarks: results});
    })
    .catch((err) => {
      console.log('DEBUG: /api/items endpoint failed : ', err);
    });
  }

  getArticles () {
    // this.props.dispatch({type: 'addArticle', id1: 'id1'});
    const options = {
      credentials: 'include'
    };    
    fetch("/articles/articles", options)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      this.debug && console.log('Data.getArticles()', results[0]);
      results.reverse();
      this.props.dispatch({type: 'updateArticles', articles: results});
    })
    .catch((err) => {
      console.log('DEBUG: /api/articles endpoint failed : ', err);
    });
  }

  render () {
    return (
      <div></div>
    )
  }
}

export default connect()(Data);