import './F1Footer.css';
import React from 'react'

class F1Footer extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <div className="footer">
        <a className="contact" href="mailto:contact@livelong.ai?subject='front page inquiry'">contact</a>
      </div>

    )
  }

}

export default F1Footer;

        // <p className='contact'>contact@livelong.ai</p>
