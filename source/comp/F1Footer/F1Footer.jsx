import './F1Footer.css';
import React from 'react';
import { connect } from 'react-redux';

class F1Footer extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    console.log("DEBUG: L2 : F1-Footer: ", this.props.Menu.current);

    let component_on = false;
    if(this.props.Menu.current === 'User'){
      component_on = true;
    }

    return (
      
      <div className="footer" id={component_on? 'footer_show' : 'footer_hide'}>
        <a className="contact" href="mailto:chris@livelong.ai?subject='front page inquiry'">contact</a>
        <a className="contact" target="_blank" href="https://www.lucidchart.com/documents/view/1a04a57f-a2ee-4cdc-a75a-bbff8dbbd4d9/0_0">lucid</a>
        <a className="contact" target="_blank" href="https://repl.it/@livelong1">replits</a>
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