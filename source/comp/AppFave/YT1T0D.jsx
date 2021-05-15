import React from 'react';
import { connect } from 'react-redux';

import './YT1T0D.css';

class YT1T0Domain extends React.Component {

  constructor(props) {
    super(props);
  }

  domainClicked (url) {

    // will populate this.props.Modal2.data with the URL list
    this.props.dispatch({type: 'toggleModal2On', data: this.props.url_list});
  }

  render () {
    const meta = this.props.url_list.meta;
    // domain holds the array of URLs

    return (

      <div id={meta.id + 'a'} 
           className = 'domain_div' 
           onClick = {(e) => {e.preventDefault(); this.domainClicked(meta.url)}} >

        <img className='domain_image' 
             src = {'http://www.google.com/s2/favicons?domain=' + meta.domain}/>
        
        <a className='domain_link' 
           href = {meta.url} 
           target='_blank'>

           {meta.title}
           
        </a>

      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps)(YT1T0Domain);