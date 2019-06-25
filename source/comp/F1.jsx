import React from 'react';
import { connect } from 'react-redux';

import F1Apex    from './Apex/F1Apex.jsx';
import F1Page    from './F1Page.jsx';

class F1 extends React.Component { 
  constructor(props) {
    super(props);
  }

  fetchData = () => {
    const options = {
      credentials: 'include'
    };
    fetch("/api/items", options)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      this.props.dispatch({type: 'updateBookmarks', bookmarks: results});
      this.findStatus(results);
    })
    .catch((err) => {
      this.notLoggedIn();
      console.log('DEBUG: fetch /api/items error');
    });
  }

  findStatus = (results) => {
    if(results[results.length - 1].id_google){
      const user = results.slice(-1);
      this.loggedIn(user);
    } else {
      this.notLoggedIn();
    }
  }
 
  notLoggedIn = () => {
    window.setTimeout(() => {
      // this.props.dispatch({ type: 'updateMenu', current: 'splash' });
    }, 4000);
    window.setTimeout(() => {
      // this.props.dispatch({ type: 'toggleSideBar' });
    }, 8000);
  }

  loggedIn = (user) => {
    this.props.dispatch({ type: 'setUser', current: user[0] });
  }

  render () {
    return (
      <div id='app_hold'>
        <F1Apex/>
        <F1Page/>
      </div>
    )
  }
}

export default connect()(F1);
