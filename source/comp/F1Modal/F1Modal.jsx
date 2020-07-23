import React from 'react';
import { connect } from 'react-redux';
import './F1Modal.css';
import F1ModalForm from './F1ModalForm.jsx'

class F1Modal extends React.Component {

  constructor(props) {
    super(props);
    this.debug = false;
  }

  closeModal = (e) => {
    this.props.dispatch({type: 'toggleOff'});
    // bug here - you need to clear the form 
  }

  render () {    
    return (
      <div className = {this.props.Modal.on === true ? 'modal on' : 'modal off'}>
        <div id = 'modal-box'>
          <img id = 'modal-pic' src = "dist/images/svg/favicon.svg"/>
            <F1ModalForm/>
          <div onClick={this.closeModal} id="modal-cross">+</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    Modal: state.Modal
  }
}

export default connect(mapStateToProps)(F1Modal);