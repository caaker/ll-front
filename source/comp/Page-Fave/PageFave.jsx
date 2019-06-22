import React from 'react';
import { connect } from 'react-redux';
import PageFaveContent from './PageFaveContent.jsx';
import PageFaveMenu from './PageFaveMenu.jsx';
import './PageFave.css';

class PageFave extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className={this.props.Menu.current === 'Fave' ? 'body_show' : 'body_hide'} >
        <div id = "fave_page_hold">
          <PageFaveMenu />

        </div>
      </div>
    )
  }
} 

const mapStateToProps = state => {
  return {
    Menu: state.Menu
  }
}

export default connect(mapStateToProps)(PageFave);
          // <PageFaveContent />