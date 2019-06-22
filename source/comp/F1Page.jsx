import React from 'react';
import { connect } from 'react-redux';

import PageArticle from   './Page-Article/PageArticle.jsx';
import PageFave from      './Page-Fave/PageFave.jsx';


import FastApp from         './FastApp.jsx';
import FaviconApp from      './FaviconApp.jsx';
import UserApp from         './UserApp.jsx';



import './F1Page.css';


class F1Page extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    let app = this.props.Menu.current;

    // {(app === 'Favicons') && <FaviconApp/>}

    return (
      <div id='container_hold'>
        <div id='container-1'>
  	      <div id='container-2'>
            
            {(app === 'Clock') && <FastApp/>}
            {(app === 'User') &&  <UserApp/>}

            <PageArticle/>
            <PageFave/>

  	      </div>
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

export default connect(mapStateToProps)(F1Page);


            // <PageUser/>

