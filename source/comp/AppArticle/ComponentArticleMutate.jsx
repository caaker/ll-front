// https://material.io/resources/icons/?icon=info&style=baseline
// use the youtube style of saving bookmarks

import React from 'react';
import { connect } from 'react-redux';
import './ComponentArticleMutate.css';
import ComponentArticleMutateDelete from './ComponentArticleMutateDelete.jsx';


class ComponentArticleMutate extends React.Component {

  constructor(props) {
    super(props);
    this.debug = true;
  }

  editClicked = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'toggleOn', data: this.props.data});
  }

  render() {
    
    return ( 
      <span>
        <svg 
          className ='medd_edit'        
          onClick={event => this.editClicked(event)}
          xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>

        <ComponentArticleMutateDelete data={this.props.data}/>

      </span>
    )
  }
}

export default connect()(ComponentArticleMutate);
