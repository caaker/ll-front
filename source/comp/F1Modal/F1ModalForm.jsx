import React from 'react';
import { connect } from 'react-redux';
import URL   from '../Common/URL.js';
import validate from './Validate.js'
import './F1ModalForm.css';
import ComponentArticleLink from '../AppArticle/ComponentArticleLink.jsx';


class F1ModalForm extends React.Component {

  constructor(props) {
    super(props);
    this.debug = true;
    this.url = new URL();
    this.img_url = new URL();
    this.initial_state = {link:"", image:"", title:"", summary:"", tag:"", domain:""};
    this.state = this.initial_state;
  }

  componentDidUpdate(prevProps) {

    // console.log("DEBUG: componenetDidUpdate() called:")
    if ((this.props.Modal.data !== prevProps.Modal.data) && this.props.Modal.data) {
      this.url.updateURL(this.props.Modal.data.link);
      this.img_url.updateURL(this.props.Modal.data.image);
      this.setState(this.props.Modal.data);
      this.setState({
        domain: this.url.obj.domain
      }); 
    }

  }

  updateForm = (event) => {

    // console.log("DEBUG: updateForm() called:")
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
    fetch("/articles/add", options )
      .then((response) => {
        console.log("DEBUG: fetch/POST success: ")
      })
      .catch((error) => {
        console.log('fetch/POST error', error);
      });
    this.closeModal();
  }

  submitFormPUT = (event) => {
    event.preventDefault();
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
        console.log('fetch/PUT error', error);
      });
    this.closeModal();
  }

  closeModal = (e) => {
    this.props.dispatch({type: 'toggleOff'});
    this.setState(this.initial_state);
  }

/*


*/

  render() {
    return (
      <div>
        <form onSubmit = {this.props.Modal.data ? this.submitFormPUT : this.submitForm} >
          <input value = {this.state.link}    onChange={this.updateForm} className = 'mi' type="text" placeholder="link"    name="link"></input>
          <input value = {this.state.image}   onChange={this.updateForm} className = 'mi' type="text" placeholder="image"   name="image"></input>
          <input value = {this.state.title}   onChange={this.updateForm} className = 'mi' type="text" placeholder="title"   name="title"></input>

          <ComponentArticleLink className = 'medd_link_modal' title={this.state.title} />

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