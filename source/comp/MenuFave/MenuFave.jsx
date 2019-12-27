import React from 'react';
import { connect } from 'react-redux';
import './MenuFave.css';


class MenuFave extends React.Component {

  constructor(props) {
    super(props);
  }

  clickHandler (id) {
    this.props.dispatch({type: 'updateMenuFave', current: id.toString()});
  }

  render () {
    let item = this.props.MenuFave.current;

    return (
      <div id='tag1_hold'>
        
        <img className={item==='all' ? 'tag1_active' : 'tag1'} 
          id="arc_arc" src="dist/images/svg/heart.svg" onClick={this.clickHandler.bind(this, 'all')} ></img>
        
        <img className={item==='news' ? 'tag1_active' : 'tag1'} 
          id="arc_news" src="dist/images/svg/news.svg" onClick={this.clickHandler.bind(this, 'news')} ></img>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    MenuFave: state.MenuFave
  }
}

export default connect(mapStateToProps)(MenuFave);