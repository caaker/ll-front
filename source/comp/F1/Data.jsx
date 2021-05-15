import React        from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';


class Data extends React.Component {


  constructor(props) {
    super(props);
    this.getUser();
    this.getArticles();

    // this.getBookmarks();
    // this.listenForBeacon();
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
      if(results){
        this.props.dispatch({type: 'initializeUser', current: results});
      }
    })
    .catch((err) => {
      console.log('DEBUG: /api/user endpoint failed : ', err);
    });
  }


  getArticles () {
    const options = {
      credentials: 'include'
    };    
    fetch("/articles/get", options)
    .then((response) => {
      return response.json();
    })
    .then((articles) => {
      articles.reverse();

      // tag*, owner, link*, image, title*, summary, domain*, timestamp
      // we add - url and title
      const domains = articles.map((obj)=>{
        let short_domain = obj.domain.split(".");
        short_domain = short_domain[short_domain.length - 2];
        return {
          tag0: obj.tag,
          link: obj.link,
          titleurl: obj.title,
          domain: obj.domain,
          url: 'http://' + obj.domain,
          title: short_domain
        }
      });
      this.props.dispatch({type: 'initializeDomains', domains: domains, tag1: 'health'});
      this.props.dispatch({type: 'initializeArticles', articles: articles});
    })
    .catch((err) => {
      console.log('DEBUG: /api/articles endpoint failed : ');
    });
  }


  getBookmarks () {
    const options = {
      credentials: 'include'
    };
    fetch("/bookmarks/get", options)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      this.props.dispatch({type: 'updateBookmarks', bookmarks: results});
    })
    .catch((err) => {
      // console.log('DEBUG: /bookmarks/get endpoint failed : ');
    });
  }


  listenForBeacon () {
    const socket = io();

    socket.on('error', (error) => {
      console.log("DEBUG/SERVER: ERROR");
      console.log(error);
    });

    socket.on('beacon', (data) => {
      console.log('DEBUG/SERVER:');
      console.log(data);
    });
  }


  render () {
    console.log("DEBUG: L2 : F1-Data ");

    return (
      <div></div>
    )
  }
}

export default connect()(Data);


