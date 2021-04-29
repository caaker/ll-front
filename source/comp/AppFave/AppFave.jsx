import React from 'react';
import { connect } from 'react-redux';
import PageFave from './PageFave.jsx';
import MenuFave from './MenuFave.jsx';
import './AppFave.css';

class AppFave extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id = "app_fave">
        <MenuFave />
        <PageFave />
      </div>
    )
  }
} 

export default AppFave;


