import React from 'react';
import { connect } from 'react-redux';
import './F1Apex1.css';
import Search from '../Search/Search.jsx';

class F1Apex1 extends React.Component {

  constructor(props) {
    super(props);
   }

   // this.props.Menu.current
   // why is this not built in, this is weird, anti-pattern?
   componentRendered = (user_selected) => {     
     if(!user_selected){
       this.props.dispatch({type: 'updateSearch', current: "" });
     }
   }

  render () {

    let user_selected = this.props.Apex1.current;
    let correct_page = (this.props.Menu.current === "Articles");
    let show_apex_1 = user_selected && correct_page;

    this.componentRendered(user_selected);

    console.log("DEBUG: L3 : F1-Apex-1 ");
    
    return (
		  <div className='apex1-1' id={show_apex_1 ? 'apex1-1_show' : 'apex1-1_hide'}>
		    <div className='apex_inner' id='apex1-2'>
          {show_apex_1 && <Search/>}
		    </div>
		  </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    Apex1: state.Apex1,
    Menu: state.Menu
  }
}

export default connect(mapStateToProps)(F1Apex1);
