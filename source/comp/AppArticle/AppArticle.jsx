import React from 'react';
import { connect } from 'react-redux';
import Article from './Article.jsx';
import './AppArticle.css';
import Common from '../Common/Common.js';

class AppArticle extends React.Component {

  constructor (props) {
    super(props);
  }

  // scroll to hash in URL if it exists after 1000msec and offset 80 px
  componentDidMount () {
    Common.scrollToHash(1000, 80);
  }

  makeList () {
    if(this.props.Articles.articles){
      let articles = this.props.Articles.articles;

      // filter the articles if their is a search criteria based upon raw json data
      if(this.props.Search.current){
        articles = articles.filter((val)=>{
          return this.arrticleSearch(val);
        });        
      }

      // map data to React components
      articles = articles.map((val, index) => {
        val.index = index;
        return <Article key={index} data={val}/>;
      });

      return articles;
    }

  }

  arrticleSearch (val) {
    const search_string = this.props.Search.current; 
    if( val.title.toLowerCase().search(search_string.toLowerCase()) !== -1 ){
      return true
    }
    if( val.summary.toLowerCase().search(search_string.toLowerCase()) !== -1 ){
      return true
    }
    if( val.tag.toLowerCase().search(search_string.toLowerCase()) !== -1 ){
      return true
    }
    if( val.domain.toLowerCase().search(search_string.toLowerCase()) !== -1 ){
      return true
    }
    return false;
  }

  render () {
    console.log("DEBUG: L3 : F1-Page-Article ");
    return (
      <div id = "app_article">
        {this.makeList()}
      </div>
    )
  }
} 

const mapStateToProps = state => {
  return {
    Articles: state.Articles,
    Search: state.Search
  }
}

export default connect(mapStateToProps)(AppArticle);