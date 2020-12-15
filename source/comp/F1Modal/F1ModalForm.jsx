/*  Troubleshoot
    Only use local state to store Modal contents, do not use the redux store
*/

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

    // initial_state also also used when closing the modal
    this.initial_state = {link:"", image:"", title:"", summary:"", tag:"", domain:""};
    this.test_state = {link:"foo.com", image:"foo.com", title:"foo", summary:"foo", tag:"foo", domain:"foo.com"};
    this.state = this.initial_state;
  }

  updateForm = (event) => {
    this.updateURLObjects(event);
    this.setState({
      [event.target.name]: event.target.value,
      domain: this.url.obj.domain
    });
  }

  testFormClicked = (event) => {
    this.setState(this.test_state);
    this.url.updateURL(this.test_state.link);
    this.img_url.updateURL(this.test_state.image);
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
    const valid_status = validate(this);
    if (valid_status !== true) {
      alert(valid_status);
      return;
    }
    const state = this.state;
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

        // alter CSS back to normal
        console.log('DEBUG: Article Added: ', response);
        this.props.dispatch({type: 'addArticle', component_state: response});        
      })
      .catch((error) => {
        console.log('fetch/POST error', error);
      });

    // alter CSS to let user know, not complete

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
        {true && <div onClick={this.testFormClicked}>+</div>}
        <form onSubmit = {this.props.Modal.data ? this.submitFormPUT : this.submitForm} >
          <input value = {this.state.link}    onChange={this.updateForm} className = 'mi' type="text" placeholder="link"    name="link"></input>
          <input value = {this.state.image}   onChange={this.updateForm} className = 'mi' type="text" placeholder="image"   name="image"></input>
          <input value = {this.state.title}   onChange={this.updateForm} className = 'mi' type="text" placeholder="title"   name="title"></input>
          
          <ComponentArticleLink className = 'medd_link_modal' title={this.state.title} />
          
          <input value = {this.state.summary} onChange={this.updateForm} className = 'mi' type="text" placeholder="summary" name="summary"></input>
          <input value = {this.state.tag}     onChange={this.updateForm} className = 'mi' type="text" placeholder="tag"     name="tag"></input>
          <input value = {this.state.domain}  onChange={this.updateForm} className = 'mi' type="text" placeholder="domain"  name="domain"></input>
          <button className="butn butn3">Add</button>
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
