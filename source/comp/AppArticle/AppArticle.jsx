import React from 'react';
import { connect } from 'react-redux';

import ComponentArticle from './ComponentArticle.jsx';

import './AppArticle.css';
import articles from './articles.js'

class AppArticle extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let hash = document.location.hash.slice(1);
    console.log('hash', hash);
    if (hash) {
      const hashElement = document.getElementById(hash);
      if(hashElement){
        hashElement.scrollIntoView();  
      } else{
        console.log('hash id does not exist: check yo self');
      }
      
    }
  }


    // React.useEffect( function () {
    //     let hash = document.location.hash;
    //     console.log(hash)
    //     if (hash) {
    //       const hashElement = document.querySelector(document.location.hash);
    //       hashElement.scrollIntoView();
    //     }
    //   }, []);


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
