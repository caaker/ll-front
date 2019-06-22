import React from 'react';
import { connect } from 'react-redux';
import './ComponentArticle.css';
import ComponentBookmark from './ComponentBookmark.jsx';

class ComponentArticle extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   read: false,
    //   count: +this.props.data.saved
    // }
  }

  clickHandler = () => {
    // alert("Coming Soon - Contact us at contact@livelong.ai to provide feedback!");
    // this.setState( (state, props) => {
    //   return {
    //     read: !state.read,
    //     count: !state.read ? (state.count + 1) : (state.count - 1)
    //   }; 
    // });
  }

  render() {
    let name = this.props.data.title.replace(/ /g, '_');
    return ( 
      <article className="medd_article">
        
        <div className="medd_top">
          <ComponentBookmark name={name} count={+this.props.data.saved} />
        </div>

        <a id={name} 
           className="medd_image_link" href={this.props.data.link} target="_blank">
          <img className="medd_image" src={this.props.data.image}></img>
        </a>

        <h2 className="medd_heading">
          <a className="medd_heading_link" href={this.props.data.link} id={this.props.data.title} 
             target="_blank">{this.props.data.title}</a>
        </h2>

        <p className="medd_summary">
          {this.props.data.summary}
        </p>

        <p className="medd_tag">
          {this.props.data.tag}
        </p>

        <p className="medd_domain">
          {this.props.data.domain}
        </p>

      </article>
    )
  }
}

const mapStateToProps = state => {
  return {
    Modal: state.Modal
  }
}

export default connect(mapStateToProps)(ComponentArticle);
