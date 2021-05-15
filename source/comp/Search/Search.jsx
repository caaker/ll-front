import React from 'react';
import { connect } from 'react-redux';
import './Search.css';

class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.dispatch({type: 'updateSearch', current: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div id={this.props.Apex1.current ? 'search_bar_show' : 'search_bar_hide'}>
        <form onSubmit={this.handleSubmit} id="search_bar_form">
          <input
            id="search_bar_input"
            name="search"
            type="text"
            placeholder=" Search"
            value={this.props.Search.current}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    Search: state.Search,
    Apex1: state.Apex1
  }
}

export default connect(mapStateToProps)(Search);