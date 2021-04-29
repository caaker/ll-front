import React from 'react';
import ZFave from './ZFave.jsx';
import './PageFaveTag1Tag0.css';

class PageFaveTag1Tag0 extends React.Component {
  
  constructor(props) {
    super(props);
  }

  tagClicked = () => {
  }

  render () {

    // add a better key later
    let count = 0;

    if(this.props.bookmarks.length === 0) {
      return null;
    }

    let render = this.props.bookmarks.map((bookmark) => {
      return <ZFave bookmark={bookmark} key={count++} tagClicked={this.tagClicked} />
    });      

    return (
      <div className="bookmark_page" id="{this.props.tag0}">
        <div className="bookmark_tag_title" onClick={this.tagClicked}>
          <p className="bookmark_tag_title_p">
            {this.props.tag0}
          </p>
        </div>
        {render}
      </div>
    )
  }
}

export default PageFaveTag1Tag0;