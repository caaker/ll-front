import React from 'react';
import { connect } from 'react-redux';
import './F1Modal2.css';

class F1Modal2 extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if(this.props.Modal2.on === true){
      document.body.classList.add("modal-on-2");
    } else {
      document.body.classList.remove("modal-on-2");
    }
  }

  render () {    
    return (
      <div className = {this.props.Modal2.on === true ? 'modal-2 on-2' : 'modal-2 off-2'}>
        <div id = 'modal-box-2'>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    Modal2: state.Modal2
  }
}

export default connect(mapStateToProps)(F1Modal2);
