import React from 'react';
import { connect } from 'react-redux';
import './F1MenuSearch.css';


// consider a re-factor to use a google search icon as it is language agnostic

class F1MenuSearch extends React.Component {

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
      <div id={this.props.Apex.current ? 'search_bar_show' : 'search_bar_hide'}>
        <form onSubmit={this.handleSubmit} id="search_bar_form">
          <input
            id="search_bar_input"
            name="search"
            type="text"
            placeholder=" Search"
            value={this.props.Search.current}
            ref="filterTextInput"
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    Apex: state.Apex,
    Search: state.Search,
    Menu: state.Menu

  }
}

export default connect(mapStateToProps)(F1MenuSearch);