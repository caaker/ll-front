
  /*
   *
   * EDIT - DATA FLOW
   *
   */

// The article(*) will send data to the Modal using dispatch so it will be in the state container(*) as well
// Modal will take that data and put it in URL(*)
// Modal will also put that data in the local state(*)
// This is ac controlled form so it will be in the form(*) as well
// It will be in 5 places, 7 if you include the client origin that is stored in a variable and the state container


import React from 'react';
import { connect } from 'react-redux';
import './F1Modal.css';
import URL from '../Common/URL.js';

class F1Modal extends React.Component {


  /*
   *
   * LIFECYCLE METHODS
   *
   */


  constructor(props) {
    super(props);
    this.debug = false;
    this.debug && console.log('DEBUG: constuctor() called');
    this.initial_state = {link:"", image:"", title:"", summary:"", tag:"", domain:""};
    this.state = this.initial_state;
    this.url = new URL();
    this.img_url = new URL();
  }
  componentDidMount() {
    this.debug && console.log('DEBUG: componentDidMount() called');
  }
  componentDidUpdate(prevProps) {
    // console.log('DEBUG: componentDidUpdate() called', prevProps.Modal); // same each time
    this.debug && console.log('DEBUG: componentDidUpdate() called'); // same each time
    // Set the state of the form to the data returned from the server through recux/dispatch
    // This will allow us to PUT / Update the data as this is a controlled form.
    // That is the state holds the form input.
    // Typical usage (don't forget to compare props) or infinite loop will ocur.

    if ((this.props.Modal.data !== prevProps.Modal.data) && this.props.Modal.data) {
      // becasue the form did not update but populates we must call update manually for both URLs
      this.url.updateURL(this.props.Modal.data.link);
      this.img_url.updateURL(this.props.Modal.data.image);
      this.setState(this.props.Modal.data);
      this.setState({
        domain: this.url.obj.domain
      }); 
    }

  }

  componentWillUnmount(){
    this.debug && console.log('DEBUG: componentWillUnmount() called');    
  }


  /*
   *
   * FORM UPDATE AND SUBMIT METHODS
   *
   */


  updateForm = (event) => {
    this.debug && console.log('DEBUG: updateForm() called', this.url.obj.domain)
    if(event.target.name === "link"){
      this.url.updateURL(event.target.value);
    }
    if(event.target.name === "image"){
      this.img_url.updateURL(event.target.value);
    }1
    this.setState({
      [event.target.name]: event.target.value,
      domain: this.url.obj.domain
    }); 
  }

  submitForm = (event) => {
    event.preventDefault();
    const valid = this.validateSubmission();
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
    // this.debug && console.log(this.state);
    // this.debug && console.log(this.props.Modal.data);

    event.preventDefault();

    const valid = this.validateSubmission();
    if (valid !== true) {
      alert(valid)
      return;
    }

    let _id = encodeURIComponent(this.state._id);

    // need to send state data not props.Modal data
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
      this.clickedCross();
  }


  /*
   *
   *  METHODS
   *
   */


  // called only when the close button is clicked
  clickedCross = (e) => {
    this.props.dispatch({type: 'toggleOff'});
    this.clearForm();
  }

  // called only on a submission
  validateSubmission = () => {
    if(!this.url.obj.valid) {
      return 'url not valid';
    }
    if(!this.img_url.obj.valid) {
      return 'image not valid';
    }
    if(this.state.title === "") {
      return 'title not valid';
    }
    if(this.state.summary === "") {
      return 'summary not valid';
    }
    return true;
  }

  // called when form is submitted or when it is closed
  clearForm = () => {
    // this.setState(this.initial_state);
  }

/*
remove to make more maleable
  action = "/articles/add" method="POST"
  encoded in the fetch()
*/

  render () {
    this.debug && console.log('DEBUG: render() called');
    return (
      <div className = {this.props.Modal.on === true ? 'modal on' : 'modal off'}>
        <div id = 'modal-box'>
          <img id = 'modal-pic' src = "dist/images/svg/favicon.svg"/>
          <form onSubmit = {this.props.Modal.data ? this.submitFormPUT : this.submitForm} >
            <input value = {this.state.link}    onChange={this.updateForm} className = 'mi' type="text" placeholder="link"    name="link"></input>
            <input value = {this.state.image}   onChange={this.updateForm} className = 'mi' type="text" placeholder="image"   name="image"></input>
            <input value = {this.state.title}   onChange={this.updateForm} className = 'mi' type="text" placeholder="title"   name="title"></input>
            <input value = {this.state.summary} onChange={this.updateForm} className = 'mi' type="text" placeholder="summary" name="summary"></input>
            <input value = {this.state.tag}     onChange={this.updateForm} className = 'mi' type="text" placeholder="tag"     name="tag"></input>
            <input value = {this.state.domain}  onChange={this.updateForm} className = 'mi' type="text" placeholder="domain"  name="domain"></input>
            {this.props.Modal.data ? <button className="butn butn3">Update</button> : <button className="butn butn3">Add</button>}
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


// action = "/articles/add" method="POST"

// this.setState((previousState, currentProps) => {
// });