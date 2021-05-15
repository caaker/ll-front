import React from 'react';
import { connect } from 'react-redux';
import './F1Modal.css';
import ModalForm from './ModalForm.jsx'

class F1Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if(this.props.Modal.on === true){
      document.body.classList.add("modal-on");
    } else {
      document.body.classList.remove("modal-on");
    }
  }

  render () {    
    return (
      <div className = {this.props.Modal.on === true ? 'modal on' : 'modal off'}>
        <div id = 'modal-box'>
          <ModalForm/>
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
