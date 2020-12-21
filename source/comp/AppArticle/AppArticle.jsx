import React from 'react';
import { connect } from 'react-redux';
import ComponentArticle from './ComponentArticle.jsx';
import './AppArticle.css';

class AppArticle extends React.Component {

  constructor(props) {
    super(props);
  }

  useScrollTo(element) {
    const position = element.getBoundingClientRect().top - 80;
    window.scrollTo({
      top: position,
      behavior: "smooth"
    });
  }

  componentDidMount() {
    const hash = document.location.hash.slice(1);
    if(!hash) return;    
    window.setTimeout(()=>{
      const element = document.getElementById(hash);
      if(!element) return;
      this.useScrollTo(element);
    }, 500)         
  }

  // 3 "extra" renders occur before this is populated, try and reduce
  makeList () {
    if(this.props.Articles.articles){

      return this.props.Articles.articles.filter((val)=>{
        return this.implementSearch(val);
      }).map((val, index) => {
        val.index = index;
        return <ComponentArticle key={index} data={val}/>;
      });      
    

    }
  }

// https://stackoverflow.com/questions/177719/case-insensitive-search
  implementSearch(val) {
    let search = this.props.Search.current; 
    // console.log(search); 

    // will be undefined or empty string when no search text has been entered  
    if(!search){
      return true;
    }

    if( val.domain.toLowerCase().search(search.toLowerCase()) !== -1 ){
      return true
    }

    if( val.tag.toLowerCase().search(search.toLowerCase()) !== -1 ){
      return true
    }

    if( val.title.toLowerCase().search(search.toLowerCase()) !== -1 ){
      return true
    }

    if( val.summary.toLowerCase().search(search.toLowerCase()) !== -1 ){
      return true
    }

    return false;
  }

  render () {
    //console.log('AppArticle render() called');

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