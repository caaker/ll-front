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

// .body_show{
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   transition: opacity 1s;
//   display: block;
//   opacity: 1;
//   z-index: 10000;
// }
// .body_hide{
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   transition: opacity 1s;
//   display: none;
//   opacity: 0;
// }
