// https://material.io/resources/icons/?icon=info&style=baseline
// use the youtube style of saving bookmarks

import React from 'react';
import { connect } from 'react-redux';
import './ArticleCopy.css';
import Common from '../Common/Common.js';

class ArticleCopy extends React.Component {

  constructor(props) {
    super(props);
  }

  copyToClipboard (event, text) {
    event.preventDefault();
    Common.copyToClipboard(text);
    alert("Copied the text: " + text);
  }

  render() {
    
    const hash = Common.makeHash(this.props.title);
    const hash_link = 'http://www.livelong.ai#' + hash;
    const medd_link_className = this.props.className || 'medd_copy';

    return ( 
      <span id={hash}>

        <svg
          className={medd_link_className}
          ref={ref => this.link = ref} 
          id={hash_link} 
          onClick={event => this.copyToClipboard(event, this.link.id)}
          xmlns="http://www.w3.org/2000/svg" 
          height="24px" 
          viewBox="0 0 24 24" 
          width="24px" 
          fill="#000000">
          <path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
        </svg>

      </span>
    )
  }
}

export default connect()(ArticleCopy);

