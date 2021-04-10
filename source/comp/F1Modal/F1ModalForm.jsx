
import React from 'react';
import { connect } from 'react-redux';
import URL   from '../Common/URL.js';
import validate from './Validate.js'
import './F1ModalForm.css';
import ComponentArticleLink from '../AppArticle/ComponentArticleLink.jsx';

class F1ModalForm extends React.Component {

  constructor(props) {
    super(props);
    this.url = new URL();
    this.img_url = new URL();
    this.initial_state = {link:"", image:"", title:"", summary:"", tag:"", domain:""};
    this.state = this.initial_state;
    this.debug = true;
  }

  // check docs as they claim setting state here can cause an error
  // first check is per docs and second check is to make sure we actually have data from an edit
  componentDidUpdate(prevProps) {
    if ((this.props.Modal.data !== prevProps.Modal.data) && this.props.Modal.data) {
      this.setState(this.props.Modal.data);
      this.debug && console.log('DEBUG:(componentDidUpdate)this.props.Modal.data', this.props.Modal.data);

      // update .link and .image to match state and html and validate
      this.url.updateURL(this.props.Modal.data.link);
      this.img_url.updateURL(this.props.Modal.data.image);
      }
  }

  updateForm = (event) => {
    this.debug && console.log('DEBUG:updateForm-event,target.value', event.target.value);
    this.updateURLObjects(event);
    this.setState({
      [event.target.name]: event.target.value,
      domain: this.url.obj.domain
    });
  }

  updateURLObjects = (event) => {
    if(event.target.name === "link"){
      this.url.updateURL(event.target.value);
    }
    if(event.target.name === "image"){
      this.img_url.updateURL(event.target.value);
    }
  }

  submitForm = (event) => {
    event.preventDefault();

    // annoying as URLs are validated separately from other form data
    const valid_status = validate(this);
    if (valid_status !== true) {
      alert(valid_status);
      return;
    }
    const options = { 
      headers: {'Content-Type': 'application/json'}, 
      method: 'POST', 
      body: JSON.stringify(this.state)
    };    
    fetch("/articles/add", options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.debug && console.log('DEBUG: Article Added: ', response);
        this.props.dispatch({type: 'addArticle', component_state: response});        
      })
      .catch((error) => {
        this.debug && console.log('fetch/POST error', error);
      });
    this.closeModal();
  }

  submitFormPUT = (event) => {
    event.preventDefault();
    this.debug && console.log("this.state", this.state)
    const valid_status = validate(this);
    if (valid_status !== true) {
      alert(valid_status);
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
        console.log("DEBUG: fetch/PUT success: ", _id)
      })
      .catch((error) => {
        console.log("DEBUG: fetch/PUT error", error);
      });
    this.closeModal();
  }

  // changes local state
  closeModal = (e) => {
    this.props.dispatch({type: 'toggleOff'});
    this.setState(this.initial_state);
  }

  render() {
    return (
      <div>
        {this.props.Modal.data ? <p id='title'>Update Article</p> : <p id='title'>Create Article</p>}
        <div className="solid"> </div>
        <ComponentArticleLink className = 'medd_link_modal' title={this.state.title} />
        <form onSubmit = {this.props.Modal.data ? this.submitFormPUT : this.submitForm} >
          <input value = {this.state.link}    onChange={this.updateForm} className = 'mi' type="text" placeholder="link"    name="link"></input>
          <input value = {this.state.image}   onChange={this.updateForm} className = 'mi' type="text" placeholder="image"   name="image"></input>
          <input value = {this.state.title}   onChange={this.updateForm} className = 'mi' type="text" placeholder="title"   name="title"></input>          
          <input value = {this.state.summary} onChange={this.updateForm} className = 'mi' type="text" placeholder="summary" name="summary"></input>
          <input value = {this.state.tag}     onChange={this.updateForm} className = 'mi' type="text" placeholder="tag"     name="tag"></input>
          <input value = {this.state.domain}  onChange={this.updateForm} className = 'mi' type="text" placeholder="domain"  name="domain"></input>
          {this.props.Modal.data ? <button className="butn butn3">Update</button> : <button className="butn butn3">Add</button>}
        </form>
        <div onClick={this.closeModal} id="modal-cross">+</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    Modal: state.Modal
  }
}

export default connect(mapStateToProps)(F1ModalForm);


/*
  <button className="butn butn3">Add</button>
*/