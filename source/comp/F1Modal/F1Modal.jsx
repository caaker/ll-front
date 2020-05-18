import React from 'react';
import { connect } from 'react-redux';
import './F1Modal.css';
import URL from '../URL/URL.js';

class F1Modal extends React.Component {
  constructor(props) {
    super(props);
    this.initial_state = {url:"", img:"", title:"", summary:""};
    this.state = this.initial_state;
    this.url = new URL();
    this.img_url = new URL();
  }
  
  clickedCross = (e) => {
    this.props.dispatch({type: 'toggleOff'});
    this.clearForm();
  }

  handleFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    if(event.target.name === "url"){
      this.url.updateURL(event.target.value);
    }
    if(event.target.name === "img"){
      this.img_url.updateURL(event.target.value);
    }
  }

  handleFormSubmission = (event) => {
    event.preventDefault();
    if ( !this.validateForm()) {
      return;
    }
    const options = { 
      headers: {'Content-Type': 'application/json'}, 
      method: 'POST', 
      body: JSON.stringify(this.state)
    };
    fetch("/articles/add", options )
      .then((response) => {
        this.props.dispatch({type: 'toggleOff'});
        this.clearForm();
      })
  }
  validateForm = () => {
    if(!this.url.obj.valid) {
      return false;
    }
    if(!this.img_url.obj.valid) {
      return false;
    }
    if(this.state.title === "") {
      return false;
    }
    if(this.state.summary === "") {
      return false;
    }
    return true;
  }
  clearForm = () => {
    this.setState(this.initial_state);
  }

  getClass () {
    return this.props.Modal.on === true ? 'modal on' : 'modal off'; 
  }

  getImage () {
    return "dist/images/svg/favicon.svg";
  }

  render () {
    console.log(this.state)
    return (
      <div className = {this.getClass()}>
        <div id = 'modal-box'>
          <img id = 'modal-pic' src = {this.getImage()}/>
          <form onSubmit = {this.handleFormSubmission} action = "/articles/add" method="POST">
            <input value = {this.state.url} onChange={this.handleFormChange} className = 'mi' type="text" placeholder="url" name="url"></input>
            <input value = {this.state.img} onChange={this.handleFormChange} className = 'mi' type="text" placeholder="img" name="img" placeholder="img"></input>
            <input value = {this.state.title} onChange={this.handleFormChange} className = 'mi' type="text" placeholder="title" name="title"></input>
            <input value = {this.state.summary} onChange={this.handleFormChange} className = 'mi' type="text" placeholder="summary" name="summary"></input>
            <button className="butn butn3">Add</button>
          </form>
          <div onClick={this.clickedCross} id="modal-cross">+</div>
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