import React from 'react';
import { connect } from 'react-redux';
import Article from './Article.jsx';
import './AppArticle.css';

class AppArticle extends React.Component {

  constructor (props) {
    super(props);
  }

  // this is one method of scrolling, there are others
  useScrollTo (element) {
    window.scrollTo({
      top: element.getBoundingClientRect().top - 80,
      behavior: "smooth"
    });
  }

  // if there is a hash and the hash is valid scroll to it after .5s
  componentDidMount () {
    const hash = document.location.hash.slice(1);
    if(!hash) {
      return;
    }
    const element = document.getElementById(hash);
    if(!element) {
      return;
    }
    window.setTimeout(()=>{  
      this.useScrollTo(element);
    }, 500);
  }

  makeList () {
    if(this.props.Articles.articles){
      let articles = this.props.Articles.articles;

      // filter the articles if their is a search criteria
      if(this.props.Search.current){
        articles = articles.filter((val)=>{
          return this.arrticleSearch(val);
        });        
      }

      // map data to React components and returne them
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
      <div id = "article_page_hold">
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