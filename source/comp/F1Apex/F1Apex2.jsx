import React from 'react';
import { connect } from 'react-redux';

import Icon from '../Icon/Icon.jsx';
import MenuSVG from '../MenuBox/MenuSVG.jsx';
import MenuBox from '../MenuBox/MenuBox.jsx';
import MenuPic from '../MenuPic/MenuPic.jsx';
import ArticleAddButton from '../AppArticle/ArticleAddButton.jsx';

import './F1Apex2.css';


class F1Apex2 extends React.Component {
  constructor(props) {
    super(props);
   }

  render () {

    let user = this.props.User.current;
    let health = !this.props.Apex.current ? true : false;
    let menu = this.props.Menu.current;
    
    return (
      <div className='apex2-1'>
        <div className='apex_inner' id='apex2-2'>
          { true &&  <Icon/> }
          { (menu === 'Articles') &&  <ArticleAddButton/> }          
          { true &&  <MenuPic/> }
          { true &&  <MenuSVG/> }
          { true &&  <MenuBox/> }

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    User: state.User,
    Apex: state.Apex,
    Menu: state.Menu
  }
}

export default connect(mapStateToProps)(F1Apex2);


