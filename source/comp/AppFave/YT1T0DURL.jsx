import React from 'react';
import { connect } from 'react-redux';
import './YT1T0DURL.css';

class YT1T0DURL extends React.Component {

  constructor(props) {
    super(props);
  }

  itClicked = (e) => {
    e.preventDefault();
    console.log("DEBUG: itClicked!", e);
    window.open(this.props.data.link, "_blank");
  }

  linkClicked = (e) => {
    console.log("DEBUG: linkClicked!", e);
  }
 
  render () {
    const data = this.props.data;
    return (
      <div onClick={this.itClicked} id={data.id + 'a'} className='url1_div'>

        <img className='url1_image' src = {'http://www.google.com/s2/favicons?domain=' + data.domain}/>
        <a onClick={this.itClicked} className='url1_link' href = {data.link} target='_blank'>
           {data.titleurl}
        </a>

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



