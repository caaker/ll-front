import React from 'react';
import { connect } from 'react-redux';
import './ComponentArticle.css';
import ComponentBookmark from './ComponentBookmark.jsx';

class ComponentArticle extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   read: false,
    //   count: +this.props.data.saved
    // }
  }

  clickHandler = () => {
    // alert("Coming Soon - Contact us at contact@livelong.ai to provide feedback!");
    // this.setState( (state, props) => {
    //   return {
    //     read: !state.read,
    //     count: !state.read ? (state.count + 1) : (state.count - 1)
    //   }; 
    // });
  }

  linkClicked1 = (event) => {
    console.log('link clicked');
    console.log(event.target);

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

  render() {
    let hash_link = 'livelong.ai#' + this.props.data.title.replace(/ /g, '_');
    let hash = this.props.data.title.replace(/ /g, '_');
    return ( 
      <article className="medd_article">
        
        <a id={hash} 
           className="medd_image_link" href={this.props.data.link} target="_blank">
          <img className="medd_image" src={this.props.data.image}></img>
        </a>

        <p className="medd_heading">
          <a className="medd_heading_link" href={this.props.data.link} 
             target="_blank">{this.props.data.title}</a>
        </p>

        <p className="medd_summary">
          {this.props.data.summary}
        </p>

        <p className="medd_tag">
          {this.props.data.tag}
        </p>

        <p className="medd_domain">
          {this.props.data.domain}
        </p>

        <img className ='medd_favicon' src={'https://www.google.com/s2/favicons?domain=' + this.props.data.domain} />


          <svg 
            className ='medd_link'
            ref={ref => this.link = ref} 
            id={hash_link} 
            onClick={event => this.linkClicked(event, this.link.id)}
            xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 7h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-9 5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1zm2 3H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h3c.55 0 1-.45 1-1s-.45-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1z"/>
          </svg>


      </article>
    )
  }
}

const mapStateToProps = state => {
  return {
    Modal: state.Modal
  }
}

export default connect(mapStateToProps)(ComponentArticle);
// https://material.io/resources/icons/?icon=info&style=baseline
// use the youtube style of saving bookmarks

        // <div className="medd_top">
        //   <ComponentBookmark name={name} count={+this.props.data.saved} />
        // </div>

          




        // <a className ='medd_link' id={hash} onClick={this.linkClicked}>
        //   <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 7h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-9 5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1zm2 3H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h3c.55 0 1-.45 1-1s-.45-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>
        // </a>


          //       <a 
          // className ='medd_link'
          // ref={ref => this.link = ref} 
          // id='some_string' 
          // onClick={event => this.linkClicked(event, this.link.id)}
          // >

          // </a>