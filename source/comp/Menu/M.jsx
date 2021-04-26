import React from 'react';
import { connect } from 'react-redux';

import MenuIcon              from './MenuIcon.jsx';
import Menu                  from './Menu.jsx';
import MenuBox               from './MenuBox.jsx';
import MenuPic               from './MenuPic.jsx';
import ArticleAddButton      from '../AppArticle/ArticleAddButton.jsx';

class M extends React.Component {
  constructor(props) {
    super(props);
   }

  render () { 
    return (
      <div>
        { true &&  <MenuIcon/> }
        { (this.props.Menu.current === 'Articles') &&  <ArticleAddButton/> }          
        { true &&  <MenuPic/> }
        { true &&  <Menu/> }
        { true &&  <MenuBox/> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    Menu: state.Menu
  }
}

export default connect(mapStateToProps)(M);


