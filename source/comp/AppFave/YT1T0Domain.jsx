import React from 'react';
import './YT1T0Domain.css';

class YT1T0Domain extends React.Component {

  constructor(props) {
    super(props);
  }

  domainClicked (url) {
    window.open(url, '_blank');
  }

  render () {
    const domain = this.props.domain;
    return (

      <div id={domain.id + 'a'} 
           className = 'domain_div' 
           onClick = {() => {this.domainClicked(domain.url)}} >

        <img className='domain_image' 
             src = {'http://www.google.com/s2/favicons?domain=' + domain.domain}/>
        
        <a className='domain_link' 
           href = {domain.url} 
           target='_blank'
           onClick = {() => {e.preventDefault();}}>
           {domain.title || domain.domain}
        </a>

      </div>

    );
  }
}

export default YT1T0Domain;
