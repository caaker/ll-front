import React from 'react';
import { connect } from 'react-redux';

import ComponentArticle from './ComponentArticle.jsx';

import './AppArticle.css';

class AppArticle extends React.Component {

  constructor(props) {
    super(props);
  }
    
  //
  useScrollTo(element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - 80;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  useScrollIntoView(element){
    element.scrollIntoView({
      block: "start", 
      behavior: "smooth"
    });
  }

  componentDidMount() {
    let hash = document.location.hash.slice(1);
    if(!hash) {
      return;      
    }
    const element = document.getElementById(hash);
    if(!element){
      console.log('DEBUG: Hash ID is not in the DOM: ', hash)
      return;
    }
    window.setTimeout(()=>{
      this.useScrollTo(element);
    }, 1000)         
  }

  // weird behavior were new_articles comes out in order and reversed order
  // first call seems to be correct but random second call is not
  makeList () {
    let test = this.props.Articles.articles;

    // console.log(test[0]);

    let new_articles = test;
    let render;
    if(new_articles.length > 1){
      render = new_articles.map((val, index) => {
        return <ComponentArticle key={index} data={val}/>;
      });            
    }
    return render;    
  }

  render () {

    // Do not remove untill you understand why render is being called 2x. 
    // console.log('render called')
    // should be twice, once for initial construction and once for props being updated on disptach

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
