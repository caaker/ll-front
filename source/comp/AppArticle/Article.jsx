// https://material.io/resources/icons/?icon=info&style=baseline
// use the youtube style of saving bookmarks

/* jshint esversion: 8 */

import React from 'react';
import { connect } from 'react-redux';
import './Article.css';
import ArticleBookmark from './ArticleBookmark.jsx';
import ArticleMutate from './ArticleMutate.jsx';
import ArticleCopy from './ArticleCopy.jsx';
import Common from '../Common/Common.js';


class Article extends React.Component {

  constructor(props) {
    super(props);
    this.state = {pending: false}
  }

  getID() {
    return Common.makeHash(this.props.data.title); 
  }

  render() {
    
    const id = this.getID();
    const admin = (this.props.User.current.email === 'caaker.0@gmail.com');
    let pending = false;

    console.log("DEBUG: L4 : F1-Page-Article-Article ", admin);

    return ( 

      <article id={id} className={pending ? 'medd_article_pending' : 'medd_article'}>
  
        <a 
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


        <ArticleCopy title={this.props.data.title} />
        <ArticleMutate data={this.props.data}/>

      </article>
    )
  }
}

const mapStateToProps = state => {
  return {
    User:  state.User
  }
}

export default connect(mapStateToProps)(Article);


        // {true && <ArticleBookmark/>}
