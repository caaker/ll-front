import React from 'react';
import { connect } from 'react-redux';
import './ArticleModal.css';

class ArticleModal extends React.Component {
  constructor(props) {
    super(props);
  }
  
  clickedCross = (e) => {
    this.props.dispatch({type: 'toggleOff'})
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    this.setState({
      [name]: value
    });

  }

  handleSubmission = (event) => {
    event.preventDefault();
    if (true) {
      alert('Coming Soon: valid!');
    } else {
      alert('Coming Soon: not valid!');
    }
  }

  getClass () {
    if(this.props.Modal.on === true){
      return 'modal on';
    }
    return 'modal off';
  }

  render () {
    return (
      <div className = {this.getClass()}>
        <div id = 'modal-box'>
          <img id = 'modal-pic' src = "https://lh3.googleusercontent.com/-c45-MnX8G-M/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-iii2mWcBxmlpNM15nbV7NaORuuJA/mo/photo.jpg?sz=50"/>
  
          <form onChange = {this.handleChange} onSubmit = {this.handleSubmission}>
            <input className = 'mi' type="text" placeholder="url" name="url"></input>
            <input className = 'mi' type="text" placeholder="img" name="img" placeholder="img"></input>
            <input className = 'mi' type="text" placeholder="title" name="title"></input>
            <input className = 'mi' type="text" placeholder="summary" name="summary"></input>
            <input className = 'mi' type="text" placeholder="date" name="date"></input>

            <button className="butn butn3">Add</button>

          </form>
          
          <div onClick={this.clickedCross} id="modal-cross">+</div>
          
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
export default connect(mapStateToProps)(ArticleModal);


  // data = {
  //   "link":    "https://www.wholefoodsmarket.com/blog/choose-best-sunscreen",
  //   "image":   "https://i.imgur.com/1Iohvqg.jpg",
  //   "title":   "Choose the Best Sunscreen",
  //   "summary": "Picture this: You’re all packed up for a summer adventure ...",
  //   "tag":     "Health",
  //   "domain":  "https://www.wholefoodsmarket.com/",
  //   "date":    "May 14, 2014"
  // }