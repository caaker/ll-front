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

  linkClicked = (event, text) => {
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
    const medd_link_className = this.props.className || 'medd_link';

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




          // <svg 
          //   className={medd_link_className}
          //   ref={ref => this.link = ref} 
          //   id={hash_link} 
          //   onClick={event => this.linkClicked(event, this.link.id)}
          //   xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          //   <path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 7h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-9 5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1zm2 3H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h3c.55 0 1-.45 1-1s-.45-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1z"/>
          // </svg>