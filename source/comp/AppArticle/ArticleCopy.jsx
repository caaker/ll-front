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

  linkClicked (event, text) {
    event.preventDefault();
    let input = document.createElement("input");
    input.style="position:absolute;opacity:0";
    input.value = text;
    document.body.append(input);
    input.select();
    document.execCommand("copy");
    input.remove();
    alert("Copied the text: " + text);
  }

  getID(){
    return Common.makeHash(this.props.title); 
  }

  render() {
    
    const id = this.getID();
    const hash_link = 'http://www.livelong.ai#' + id ;
    const medd_link_className = this.props.className || 'medd_copy';

    return ( 
      <span id={id}>

        <svg
          className={medd_link_className}
          ref={ref => this.link = ref} 
          id={hash_link} 
          onClick={event => this.linkClicked(event, this.link.id)}
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

