import React from 'react';
import { connect } from 'react-redux';

import AppArticle from       './AppArticle/AppArticle.jsx';
import AppClock from         './AppClock/AppClock.jsx';
import AppUser from          './AppUser/AppUser.jsx';

// import AppFavicon from       './comp/AppFavicon/AppFavicon.jsx';
// import PageFave from         './Page-Fave/PageFave.jsx';


import './F1Page.css';


class F1Page extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    let app = this.props.Menu.current;
    return (
      <div id='container_hold'>
        <div id='container-1'>
  	      <div id='container-2'>

            {true && (app === 'Article') &&  <AppArticle/>}
            {true && (app === 'Clock') &&    <AppClock/>}
            {true && (app === 'User') &&     <AppUser/>}

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


// {(app === 'Favicons') && <FaviconApp/>}
// <PageFave/>