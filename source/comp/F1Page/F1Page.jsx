// libraries
import React from 'react';
import { connect } from 'react-redux';

// apps
import AppArticle from       '../AppArticle/AppArticle.jsx';
import AppClock from         '../AppClock/AppClock.jsx';
import AppUser from          '../AppUser/AppUser.jsx';
import AppFavicon from       '../AppFavicon/AppFavicon.jsx';
import AppFave from          '../AppFave/AppFave.jsx';
import AppChat from          '../AppChat/AppChat.jsx';

// css
import './F1Page.css';

class F1Page extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const app = this.props.Menu.current;
    return (
      <div id='container_hold'>
        <div id='container-1'>
  	      <div id='container-2'>
            {true && (app === 'User') &&                <AppUser/>}
            {true && (app === 'Clock') &&               <AppClock/>}
            {true && (app === 'Chat') &&                <AppChat/>}
            {true && (app === 'Articles') &&            <AppArticle/>}
            {true && (app === 'Favicons') &&            <AppFavicon/>}
            {true && (app === 'Faves') &&               <AppFave/>}
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
