import React        from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';


class Data extends React.Component {

  constructor(props) {
    super(props);
    this.getUser();
    this.getBookmarks();
    this.getArticles();
    this.listenForBeacon();
    
    this.debug = false;
  }

  listenForBeacon () {
    const socket = io();

    socket.on('error', (error) => {
      console.log("DEBUG: socket error occurred", error);
    });

    socket.on('beacon', (data) => {
      console.log('DEBUG: Server Log: ', data);
    });
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
    fetch("/bookmarks/bookmarks", options)
    .then((response) => {
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
    fetch("/articles/get", options)
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


