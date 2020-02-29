import React from 'react';
import { connect } from 'react-redux';

import ComponentArticle from './ComponentArticle.jsx';

import './AppArticle.css';
import articles from './articles.js'

class AppArticle extends React.Component {

  constructor(props) {
    super(props);
  }

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

  render () {

    const render = articles.map((val, index) => {
        return <ComponentArticle key={index} data={val}/>;
    });

    return (
      <div id = "article_page_hold">
        {render}
      </div>
    )
  }
} 

const mapStateToProps = state => {
  return {
    Menu: state.Menu
  }
}

export default connect(mapStateToProps)(AppArticle);
