import React from 'react';
import { connect } from 'react-redux';
import PageFaveContent from './PageFaveContent.jsx';
import PageFaveMenu from './PageFaveMenu.jsx';
import './AppFave.css';

class AppFave extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id = "app_fave">
        <PageFaveMenu />
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


