
import React from 'react';
import { connect } from 'react-redux';
import './ArticleMutate.css';
import ArticleMutateDelete from './ArticleMutateDelete.jsx';
import ArticleMutateEdit from './ArticleMutateEdit.jsx';

class ArticleMutate extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return ( 
      <span>
        <ArticleMutateEdit data={this.props.data}/>
        <ArticleMutateDelete data={this.props.data}/>
      </span>
    )
  }
}

export default connect()(ArticleMutate);
