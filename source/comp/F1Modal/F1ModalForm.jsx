import React from 'react';
import { connect } from 'react-redux';
import URL   from '../Common/URL.js';
import validate from './Validate.js'


class F1ModalForm extends React.Component {

  constructor(props) {
    super(props);
    this.debug = true;
    this.url = new URL();
    this.img_url = new URL();
    this.initial_state = {link:"", image:"", title:"", summary:"", tag:"", domain:""};
    this.state = this.initial_state;
  }

  // becasue the form did not update but populates we must call update manually for both URLs
  componentDidUpdate(prevProps) {
    if ((this.props.Modal.data !== prevProps.Modal.data) && this.props.Modal.data) {
      this.url.updateURL(this.props.Modal.data.link);
      this.img_url.updateURL(this.props.Modal.data.image);
      this.setState(this.props.Modal.data);
      this.setState({
        domain: this.url.obj.domain
      }); 
    }

    // DOM updatedes should also ocur in componentDidUpdate
    if(this.props.Modal.on === true){
      document.body.classList.add("modal-on");
    } else {
      document.body.classList.remove("modal-on");
    }
  }

  updateForm = (event) => {
    if(event.target.name === "link"){
      this.url.updateURL(event.target.value);
    }
    if(event.target.name === "image"){
      this.img_url.updateURL(event.target.value);
    }
    this.setState({
      [event.target.name]: event.target.value,
      domain: this.url.obj.domain
    });
  }

  submitForm = (event) => {
    event.preventDefault();
    const valid = validate(this);
    if (valid !== true) {
      alert(valid);
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

  submitFormPUT = (event) => {
    event.preventDefault();
    const valid = validate(this);
    if (valid !== true) {
      alert(valid)
      return;
    }
    let _id = encodeURIComponent(this.state._id);
    const options = { 
      headers: {'Content-Type': 'application/json'}, 
      method: 'PUT', 
      body: JSON.stringify(this.state)
    };
    fetch("/articles/put/" + _id, options )
      .then((response) => {
        // console.log('response', response);
      })
      .catch((error) => {
        console.log('edit/put clicked error', error);
      });
      this.closeModal();
  }

  closeModal = (e) => {
    this.props.dispatch({type: 'toggleOff'});
    this.setState(this.initial_state);
    // bug here - you need to clear the form on a dispatch of toogle off so 
    // F1Modal can reset the form as well
  }

  render() {
    return (
      <form onSubmit = {this.props.Modal.data ? this.submitFormPUT : this.submitForm} >
        <input value = {this.state.link}    onChange={this.updateForm} className = 'mi' type="text" placeholder="link"    name="link"></input>
        <input value = {this.state.image}   onChange={this.updateForm} className = 'mi' type="text" placeholder="image"   name="image"></input>
        <input value = {this.state.title}   onChange={this.updateForm} className = 'mi' type="text" placeholder="title"   name="title"></input>
        <input value = {this.state.summary} onChange={this.updateForm} className = 'mi' type="text" placeholder="summary" name="summary"></input>
        <input value = {this.state.tag}     onChange={this.updateForm} className = 'mi' type="text" placeholder="tag"     name="tag"></input>
        <input value = {this.state.domain}  onChange={this.updateForm} className = 'mi' type="text" placeholder="domain"  name="domain"></input>
        {this.props.Modal.data ? <button className="butn butn3">Update</button> : <button className="butn butn3">Add</button>}
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    Modal: state.Modal
  }
}

export default connect(mapStateToProps)(F1ModalForm);
