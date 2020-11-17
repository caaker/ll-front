import React from 'react';
import { connect } from 'react-redux';
import ComponentArticle from './ComponentArticle.jsx';
import './AppArticle.css';

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
    const hash = document.location.hash.slice(1);
    if(!hash) {
      console.log('DEBUG: No hash part found in the URL');
      return;
    }
    console.log('DEBUG: Hash found', hash);
    window.setTimeout(()=>{

      const element = document.getElementById(hash);
      if(!element){
        console.log('DEBUG: Element with Hash ID is not in the DOM: ', hash)
        return;
      }
      this.useScrollTo(element);

    }, 500)         
  }

  makeList () {
    let new_articles = this.props.Articles.articles;
    let render;
    if(new_articles.length > 1){
      render = new_articles.map((val, index) => {
        return <ComponentArticle key={index} data={val}/>;
      });            
    }
    return render;    
  }

  render () {
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
