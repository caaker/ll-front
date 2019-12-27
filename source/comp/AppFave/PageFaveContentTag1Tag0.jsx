import React from 'react';
import ComponentFave from '../ComponentFave/ComponentFave.jsx';
import './PageFaveContentTag1Tag0.css';

class PageFaveContentTag1Tag0 extends React.Component {
  constructor(props) {
    super(props);
  }

  tagClicked = () => {
  }

  render () {
    const bookmarks = this.props.bookmarks.map((bookmark) =>
      <ComponentFave bookmark={bookmark} key={bookmark.id} tagClicked={this.tagClicked} />
    );
    return (
      <div className="bookmark_page" id="{this.props.tag0}">
        <div className="bookmark_tag_title" onClick={this.tagClicked}>
          <p className="bookmark_tag_title_p">
            {this.props.tag0}
          </p>
        </div>
        {bookmarks}
      </div>
    )
  }
}

export default PageFaveContentTag1Tag0;

