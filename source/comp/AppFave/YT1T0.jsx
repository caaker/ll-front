import React from 'react';
import YT1T0Domain from './YT1T0Domain.jsx';
import './YT1T0.css';

class YT1T0 extends React.Component {
  
  constructor(props) {
    super(props);
  }

  tagClicked = () => {
  }

  render () {
    let count = 0;

    if(this.props.bookmarks.length === 0) {
      return null;
    }

    let render = this.props.bookmarks.map((domain) => {
      return <YT1T0Domain domain={domain} key={count++} tagClicked={this.tagClicked} />
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