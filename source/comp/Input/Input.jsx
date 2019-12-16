import React from 'react';
import { connect } from 'react-redux';

import './Input.css';
import URL from '../URL/URL.js';

// URL is in URLClass, this.url, current state, and redux ... too many places
class Input extends React.Component {


  constructor(props) {
    super(props);
    this.url = new URL();
    this.state = this.url.obj;
  }


  handleChange = (event) => {
    event.persist();
    
    console.log(event.target.value);
    
    this.url.updateURL(event.target.value);
    
    // console.log(this.url.obj.domain);
    
    this.props.dispatch({type: 'updateURL', current: this.url.obj });
    this.setState((prevState, props) => {
      return this.url.obj;
    });
  }


  handleSubmission = (event) => {
    event.preventDefault();
    if (this.url.obj.valid) {
      alert('Coming Soon: valid!');
    } else {
      alert('Coming Soon: not valid!');
    }
  }


  render() {
    return (
        <form onSubmit = {this.handleSubmission} id = "rbar_form">
          <input
            id = "rbar_form_input"
            name = "search"
            type = "text"
            placeholder = " Enter or Paste a URL"
            value = {this.state.url}
            ref = "filterTextInput"
            onChange = {this.handleChange}
          />
        </form>
    )
  }
}

export default connect()(Input);
// export default Input;
