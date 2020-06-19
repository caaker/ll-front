import React from 'react';
import { connect } from 'react-redux';
import './ArticleAddButton.css';

class ArticleAddButton extends React.Component {
  
  constructor(props) {
    super(props);
  }

  clicked = (e) => {
    this.props.dispatch({type: 'toggleOn'})
  }

  render () {
    return (
      <svg onClick={this.clicked} id='article-svg' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>    
    )
  }

}

const mapStateToProps = state => {
  return {
    Modal: state.Modal
  }
}

export default connect(mapStateToProps)(ArticleAddButton);