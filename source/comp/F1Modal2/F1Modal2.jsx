import React from 'react';
import { connect } from 'react-redux';
import './F1Modal2.css';
import YT1T0DURL from '../AppFave/YT1T0DURL.jsx';


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

  closeModal = (e) => {
    this.props.dispatch({type: 'toggleModal2Off'});
  }

  createComponents = () => {
    const data = this.props.Modal2.data;
    let components = null;
    if(data){
      let count = 0;    
      components = data.map((url) => {
        return <YT1T0DURL data={url} key={count++} />
      });
    }  
    return components;
  }

  render () {

    return (
      <div className = {this.props.Modal2.on === true ? 'modal-2 on-2' : 'modal-2 off-2'}>
        <div id = 'modal-box-2'>
          <div onClick={this.closeModal} id="modal-cross-2">+</div>
          <p id='list-title'>{data ? data.meta.title : "title not ready"}</p>
          {this.createComponents()}
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









    // console.log("DEBUG: this.props.Modal2.on", this.props.Modal2.on);
    // console.log("DEBUG: this.props.Modal2.data", this.props.Modal2.data);
