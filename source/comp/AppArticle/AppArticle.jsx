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

  makeList () {

    // 3 "extra" renders occur before this is populated, try and reduce
    if(this.props.Articles.articles){
      return this.props.Articles.articles.map((val, index) => {
        val.index = index;
        return <ComponentArticle key={index} data={val}/>;
      });      
    }
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
    Articles: state.Articles
  }
}

export default connect(mapStateToProps)(AppArticle);