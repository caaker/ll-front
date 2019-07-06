import React from 'react';
import { connect } from 'react-redux';
import './MenuBox.css';

import MenuItem    from './MenuItem.jsx';

class MenuBox extends React.Component {

  constructor(props) {
    super(props);
  }

  clickHandler = (item) => {
    this.props.dispatch({type: 'updateMenu', current: item });
    this.props.dispatch({type: 'closeMenu'});
  }

  render() {
    let test = this.props.Menu.status ? 'on' : 'off';
    let exp = true;
    return (
      <span id='container' className={test}>


        <MenuItem name='User'>
          <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"/>
          </svg>
        </MenuItem>


        <MenuItem name='Clock'>
          <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
          </svg>        
        </MenuItem>


        {exp && <MenuItem name='Chat'>
          <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
        </MenuItem>}


      </span>
    )
  }
}

const mapStateToProps = state => {
  return {
    Menu: state.Menu
  }
}

export default connect(mapStateToProps)(MenuBox);