// libraries
import React from 'react';
import { connect } from 'react-redux';

// apps
import AppArticle from       '../AppArticle/AppArticle.jsx';
import AppUser from          '../AppUser/AppUser.jsx';
import AppFavicon from       '../AppFavicon/AppFavicon.jsx';
import AppFave from          '../AppFave/AppFave.jsx';
import AppMap from           '../AppMap/AppMap.jsx';

// release
import AppChat from           '../AppChat/AppChat.jsx';


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
        <div className='container-1'>
  	      <div id='container-2' className='container-2'>
          
            {(app === 'User') &&                <AppUser/>}
            {(app === 'Articles') &&            <AppArticle/>}
            {(app === 'Favicons') &&            <AppFavicon/>}
            {(app === 'Faves') &&               <AppFave/>}
            {(app === 'Map') &&                 <AppMap/>}
            {(app === 'Chat') &&                <AppChat/>}

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