// libraries
import React from 'react';
import { connect } from 'react-redux';

// apps
import AppArticle from       '../AppArticle/AppArticle.jsx';
import AppUser from          '../AppUser/AppUser.jsx';
import AppFavicon from       '../AppFavicon/AppFavicon.jsx';
import AppFave from          '../AppFave/AppFave.jsx';


// css
import './F1Page.css';

class F1Page extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const app = this.props.Menu.current;
    console.log("DEBUG: L2 : F1-Page ");
    return (
      <div id='container_hold'>
        <div className='container-1'>
  	      <div id='container-2' className='container-2'>
          
            {(app === 'User') &&                <AppUser/>}
            {(app === 'Articles') &&            <AppArticle/>}
            {(app === 'Favicons') &&            <AppFavicon/>}
            {(app === 'Faves') &&               <AppFave/>}

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

            // {(app === 'Map') &&                 <AppMap/>}
            // {(app === 'Chat') &&                <AppChat/>}

            // import AppMap from           '../AppMap/AppMap.jsx';
            // import AppChat from           '../AppChat/AppChat.jsx';
