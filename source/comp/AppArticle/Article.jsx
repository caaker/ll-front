// https://material.io/resources/icons/?icon=info&style=baseline
// use the youtube style of saving bookmarks

/* jshint esversion: 8 */

import React from 'react';
import { connect } from 'react-redux';
import './Article.css';

import ArticleBar from './ArticleBar.jsx';
import Common from '../Common/Common.js';


class Article extends React.Component {

  constructor(props) {
    super(props);
    this.state = {pending: false}
  }

  render() {
    
    const hash = Common.makeHash(this.props.data.title);

    return ( 

      <article id={hash} className={this.state.pending ? 'medd_article_pending' : 'medd_article'}>

        <a className="medd_link" href={this.props.data.link} target="_blank">
          <img className="medd_link_image" src={this.props.data.image}></img>
        </a>
        <p className="medd_heading">
          <a className="medd_heading_link" href={this.props.data.link} target="_blank">{this.props.data.title}</a>
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
        
        <ArticleBar data={this.props.data}/>

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
