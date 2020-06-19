// https://material.io/resources/icons/?icon=info&style=baseline
// use the youtube style of saving bookmarks

import React from 'react';
import { connect } from 'react-redux';
import './ComponentArticleMutate.css';


class ComponentArticleMutate extends React.Component {

  constructor(props) {
    super(props);
  }

  editClicked = (event) => {
    event.preventDefault();
    alert('edit clicked');
  }

  deleteClicked = (event) => {
    event.preventDefault();
    alert('delete clicked');
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

          <svg
            className = 'medd_delete'
            onClick={event=> this.deleteClicked(event)} 
            xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/>
          </svg>
        </span>

    )
  }
}

const mapStateToProps = state => {
  return {
    Modal: state.Modal
  }

}

export default connect(mapStateToProps)(ComponentArticleMutate);
