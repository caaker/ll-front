import React       from 'react';
import ReactDOM    from 'react-dom';
import { Provider, connect } from 'react-redux';
import P1 from '../P1/P1.jsx';

class Output extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id='output'>
        <P1 value={this.props.URL.current.domain}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    URL: state.URL,
    User: state.User
  }
}

export default connect(mapStateToProps)(Output);