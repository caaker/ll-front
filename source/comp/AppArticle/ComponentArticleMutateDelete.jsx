import React from 'react';
import { connect } from 'react-redux';
import './ComponentArticleMutateDelete.css';

class ComponentArticleMutateDelete extends React.Component {

  constructor(props){
    super(props);
  }
  
  sendToServer = (data) => {
  }

  verifyDelete = (data) => {
    // console.log('verifyDelete() called', data);
    let _id = encodeURIComponent(data._id);  
    let index = encodeURIComponent(data.index);

    alert('Are you sure you want to delete index: ' + index);

    this.props.dispatch({type: 'deleteArticle', index: index});
    const options = { 
      headers: {'Content-Type': 'application/json'}, 
      method: 'DELETE', 
      body: JSON.stringify(data)
    };
    fetch("/articles/delete/" + _id, options )
      .then((response) => {
        // console.log('response', response);
      })
      .catch((error) => {
        console.log('delete clicked error', error);
      });
  }

  deleteClicked = (event) => {
    event.preventDefault();
    setTimeout(this.verifyDelete.bind(null, this.props.data), 1);
  }

  render() {
    return (
      <svg
        className = 'medd_delete'
        onClick={event=> this.deleteClicked(event)} 
        xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/>
      </svg>
    )
  }
}

export default connect()(ComponentArticleMutateDelete);




        //this.props.dispatch({type: 'deleteArticle', id: 'id1'});