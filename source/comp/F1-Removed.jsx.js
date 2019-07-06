  // add finally to this and re-factor
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
    }, 4000);
    window.setTimeout(() => {
    }, 8000);
  }

  loggedIn = (user) => {
    this.props.dispatch({ type: 'setUser', current: user[0] });
  }