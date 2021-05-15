import React from 'react';
import { connect } from 'react-redux';
import './YT1T0DURL.css';

class YT1T0DURL extends React.Component {

  constructor(props) {
    super(props);
    this.divClicked = this.divClicked.bind(this);
  }

  divClicked (e) {
    console.log("DEBUG: divClicked bitch!", e);
  }
 
  render () {
    const data = this.props.data;
    return (
      <div onClick={this.divClicked} id={data.id + 'a'} className='url1_div'>
      </div>
    );
  }
}

export default connect()(YT1T0DURL);

// works
// onClick={console.log("DEBUG: divClicked!")}

// does not work via bind statement in the constructor or special syntax
// onClick={this.divClicked}

// does not work
// onclick={()=>{console.log("DEBUG: divClicked!"}}


// out for minimal example
// <img className='url1_image' src = {'http://www.google.com/s2/favicons?domain=' + data.domain}/>
// <a onClick={this.linkClicked} className='url1_link' href = {data.url} target='_blank'>
//    {data.titleurl}
// </a>
