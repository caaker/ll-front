import React from 'react';

import './Input.css';
import URL from './InputURLClass.js';

class Input extends React.Component {

  constructor(props) {
    super(props);
    this.url = new URL();
    this.state = this.url.obj;
  }

  handleChange = (event) => {
    event.persist();
    this.url.updateURL(event.target.value);
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
            value = {this.state.input}
            ref = "filterTextInput"
            onChange = {this.handleChange}
          />
        </form>
    )
  }
}

export default Input;
