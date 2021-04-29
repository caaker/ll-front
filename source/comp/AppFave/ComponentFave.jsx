import React from 'react';
import './ComponentFave.css';

class PageFaveContentTag1Tag0Fave extends React.Component {

  constructor(props) {
    super(props);
  }

  bookmarkClicked (url) {
    window.open(url, '_blank');
  }
 
  // A bookmark consists of the  3 elements - the outer div, the image containing the domain favicon, and the url.
  // It needs 4 data points - the id, the url, the domain, and the title to populate correctly
  render () {
    const bookmark = this.props.bookmark;
    let tagClicked = this.props.tagClicked;

    return (
      <div className='bookmark_div' id={bookmark.id + 'a'} onClick={() => {this.bookmarkClicked(bookmark.url)}} >
        
        <img className='bookmark_image' id={bookmark.id + 'c'} 
             src={'http://www.google.com/s2/favicons?domain=' + bookmark.domain}/>
        
        <a className='bookmark_link' id={bookmark.id + 'b'} href={bookmark.url} target='_blank'
          onClick={()=>{e.preventDefault();}}>
          {bookmark.title || bookmark.domain}
        </a>
        
      </div>
    );
  }
}

export default PageFaveContentTag1Tag0Fave;