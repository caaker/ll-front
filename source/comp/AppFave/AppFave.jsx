import React from 'react';
import { connect } from 'react-redux';
import PageFaveContent from './PageFaveContent.jsx';
import MenuFave from './MenuFave.jsx';
import './AppFave.css';

class AppFave extends React.Component {

  constructor(props) {
    super(props);
    this.getItems();
  }

  getItems () {
    const options = {
      credentials: 'include'
    };
    fetch("/api/items", options)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      console.log('RESULT', results);
      this.props.dispatch({type: 'updateBookmarks', bookmarks: results});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render () {
    return (
      <div id = "app_fave">
        <MenuFave />
        <PageFaveContent />
      </div>
    )
  }
} 

const mapStateToProps = state => {
  return {
    Menu: state.Menu
  }
}

export default connect(mapStateToProps)(AppFave);


