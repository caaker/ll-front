import React        from 'react';
import { connect } from 'react-redux';

class Data extends React.Component {

  constructor(props) {
    super(props);
    this.getUser();
    this.getItems();
    this.getArticles();
  }

  getUser () {    
    const options = {
      credentials: 'include'
    };
    fetch("/users/user", options)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      console.log(results);
      this.props.dispatch({type: 'setUser', current: results});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  getItems () {
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
      // console.log('results dispatched');
      this.props.dispatch({type: 'updateBookmarks', bookmarks: results});
    })
    .catch((err) => {
      console.log('DEBUG: /api/items endpoint failed : ', err);
    });
  }

  getArticles () {
    const options = {
      credentials: 'include'
    };

    // console.log('DEBUG: fetch() called for articles');
    
    fetch("/articles/articles", options)
    .then((response) => {
      console.log('DEBUG: response received for articles');
      return response.json();
    })
    .then((results) => {
      console.log(results[0]);
      results.reverse();
      //console.log('DEBUG: results dispatched');
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

