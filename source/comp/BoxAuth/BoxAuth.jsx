import React from 'react';
import { connect } from 'react-redux';
import './BoxAuth.css';

class BoxAuth extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      front: true
    }
  }

  clickHandler = () => {
    this.setState((prevState) => ({
      front: !prevState.front
    }));
  }

  render() {
    return (
      <div id='auth_top'>

        <div id='auth'>
          <div id='auth_auth' className={this.state.front === true ? '' : 'flipped'}>
            
            <div id='auth_back' className='auth_face'>
            </div>
            
            <div id='auth_front' className='auth_face'>
              <a id='auth_google_link' href="/auth/google">
                <img id='auth_google_img' src='dist/images/svg/on_google.svg'/>
              </a>
            </div>

          </div>
        </div>
      

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    Modal: state.Modal
  }
}

export default connect(mapStateToProps)(BoxAuth);

// <div className='auth_button' onClick={this.clickHandler} ></div>
