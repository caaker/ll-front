import React from 'react';
import { connect } from 'react-redux';

import ComponentArticle from '../Articles/ComponentArticle.jsx';
import './AppArticle.css';
import articles from './Data.js'

class AppArticle extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {

    let render = articles.map((val, index) => {
        return <ComponentArticle key={index} data={val}/>;
    });

    return (
        <div id = "article_page_hold">
          {render}
        </div>
    )
  }
} 

const mapStateToProps = state => {
  return {
    Menu: state.Menu
  }
}

export default connect(mapStateToProps)(AppArticle);

      // <div className={this.props.Menu.current === 'Articles' ? 'body_show' : 'body_hide'} >
      // </div>
