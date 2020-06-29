// https://material.io/resources/icons/?icon=info&style=baseline
// use the youtube style of saving bookmarks

import React from 'react';
import { connect } from 'react-redux';
import './ComponentArticle.css';
import ComponentArticleBookmark from './ComponentArticleBookmark.jsx';
import ComponentArticleMutate from './ComponentArticleMutate.jsx';
import ComponentArticleLink from './ComponentArticleLink.jsx';


class ComponentArticle extends React.Component {

  constructor(props) {
    super(props);
  }

  getID(){

    let id = this.props.data.title;

    // replace spaces with _
    id = id.replace(/ /g, '_');

    // this is a special character and if you copy past it into the URL it will be substituted with %FOO
    id = id.replace(/’/g, '_');

    // youtube does not like double underscore in its comments so adjust to use double dash
    // now you can copy paste into youtube.
    id = id.replace(/#/g, '--');

    return id;
  }

  render() {
    
    const id = this.getID();
    const _id = this.props.User.current._id;
    const admin = (_id === '5eebf1dc9148400351a49dd0')

    return ( 
      <article id={id} className="medd_article">
  
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

        <ComponentArticleLink data={this.props.data} />

        {admin && <ComponentArticleMutate data={this.props.data}/>}

      </article>
    )
  }
}

const mapStateToProps = state => {
  return {
    Modal: state.Modal,
    User:  state.User
  }
}

export default connect(mapStateToProps)(ComponentArticle);
