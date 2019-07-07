import React from 'react';
import { connect } from 'react-redux';
import AppArticle from       './AppArticle/AppArticle.jsx';
import AppClock from         './AppClock/AppClock.jsx';
import AppUser from          './AppUser/AppUser.jsx';
import AppChat from          './AppChat/AppChat.jsx';

import AppFavicon from       './AppFavicon/AppFavicon.jsx';
//import AppFave from         './AppFave/AppFave.jsx';


import './F1Page.css';


class F1Page extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {

    let app = this.props.Menu.current;
    let experimental = true;

    return (
      <div id='container_hold'>
        <div id='container-1'>
  	      <div id='container-2'>

            {true && (app === 'User') &&     <AppUser/>}
            {true && (app === 'Clock') &&    <AppClock/>}

            {experimental && (app === 'Articles') &&    <AppArticle/>}
            {experimental && (app === 'Chat') &&        <AppChat/>}
            {experimental && (app === 'Favicons') &&    <AppFavicon/>}

            {false && (app === 'Faves') &&    <AppFaves/>}

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