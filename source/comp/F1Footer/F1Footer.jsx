import './F1Footer.css';
import React from 'react'

class F1Footer extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <div className="footer">
        <a className="contact" href="mailto:chris@livelong.ai?subject='front page inquiry'">contact</a>
        <a className="contact" target="_blank" href="https://www.lucidchart.com/documents/view/1a04a57f-a2ee-4cdc-a75a-bbff8dbbd4d9/0_0">lucid</a>
        <a className="contact" target="_blank" href="https://repl.it/@livelong">replits</a>
        <a className="contact" target="_blank" href="https://www.pinterest.com/livelongdotai/">pinterest</a>
      </div>

    )
  }
}
export default F1Footer;
