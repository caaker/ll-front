import React from 'react';
import YT1T0D from './YT1T0D.jsx';
import './YT1T0.css';

class YT1T0 extends React.Component {
  
  constructor(props) {
    super(props);
  }

  tagClicked = () => {
  }

  render () {
    let count = 0;
    
    let tag0 = this.props.bookmarks;

    // console.log("DEBUG: " + tag0)

    // loop through all level tag - 0 to get domains
    let render = Object.keys(tag0).map((url_list) => {
      return <YT1T0D url_list={tag0[url_list]} key={count++} tagClicked={this.tagClicked} />
    });      

    return (
      <div className="domain_group" id="{this.props.tag0}">
        <div className="domain_group_div" onClick={this.tagClicked}>
          <p className="domain_group_div_title">
            {this.props.tag0}
          </p>
        </div>
        {render}
      </div>
    )
  }
}

export default YT1T0;

    // if(this.props.bookmarks.length === 0) {
    //   return null;
    // }
