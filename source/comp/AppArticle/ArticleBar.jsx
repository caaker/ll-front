
import React from 'react';
import { connect } from 'react-redux';
import './ArticleBar.css';

// import ArticleBookmark from './ArticleBookmark.jsx';
import ArticleCopy from './ArticleCopy.jsx';
import ArticleMutateEdit from './ArticleMutateEdit.jsx';
import ArticleMutateDelete from './ArticleMutateDelete.jsx';

class ArticleBar extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    const admin = (this.props.User.current.email === 'caaker.0@gmail.com');
    return ( 
      <div id="article_bar">
        <img className ='medd_favicon' src={'https://www.google.com/s2/favicons?domain=' + this.props.data.domain} />
        <ArticleCopy title={this.props.data.title} />
        <ArticleMutateEdit data={this.props.data}/>
        <ArticleMutateDelete data={this.props.data}/>
      
      </div>
    )
  }
}

const mapper = state => {
  return {
    User:  state.User
  }
}

export default connect(mapper)(ArticleBar);
