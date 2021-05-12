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
    const item = this.props.MenuFave.current;

    return (

      <div id='tag1_hold'>

        <img className={item==='health' ? 'tag1_active' : 'tag1'} 
          id="arc_health" src="dist/images/svg/health.svg" onClick={this.clickHandler.bind(this, 'health')} ></img>

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

        // <img className={item==='all' ? 'tag1_active' : 'tag1'} 
        //   id="arc_arc" src="dist/images/svg/heart.svg" onClick={this.clickHandler.bind(this, 'all')} ></img>
