import './F1Footer.css';
import React from 'react';
import { connect } from 'react-redux';

class F1Footer extends React.Component {
  
  constructor(props) {
    super(props);
  }

  getStyle1 = () => {
    return this.props.Menu.current === 'User' ? 'footer_show ' : 'footer_hide '
  }

  getStyle2 = () => {
    return this.props.Style.current ? 'footer_style_1 ' : 'footer_style_45 ';
  }

  render() {
    console.log("DEBUG: L2 : F1-Footer: ", this.props.Menu.current);
    return (
      <div id="footer" className={this.getStyle1()}>  
        <div id="footer_inner" className={this.getStyle2()}>
          <a className="footer_item" href="mailto:chris@livelong.ai?subject='front page inquiry'">contact</a>
          <a className="footer_item" target="_blank" href="https://www.lucidchart.com/documents/view/1a04a57f-a2ee-4cdc-a75a-bbff8dbbd4d9/0_0">lucid</a>
          <a className="footer_item" target="_blank" href="https://repl.it/@livelong1">replits</a>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    Menu: state.Menu,
    Style: state.Style
  }
}

export default connect(mapStateToProps)(F1Footer);


 
/* 

<a className="contact" target="_blank" href="https://www.pinterest.com/livelongdotai/">pinterest</a>

*/