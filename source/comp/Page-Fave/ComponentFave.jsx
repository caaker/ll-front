import React from 'react';
import './ComponentFave.css';

class PageFaveContentTag1Tag0Fave extends React.Component {

  constructor(props) {
    super(props);
  }

  bookmarkClicked (url) {
    window.open(url, '_blank');
  }
 
  render () {
    let bm = this.props.bookmark;
    let tagClicked = this.props.tagClicked;

    return (
      <div className='bookmark_div' id={bm.id + 'a'} onClick={() => {this.bookmarkClicked(bm.url)}} >
        
        <img className='bookmark_image' id={bm.id + 'c'} 
             src={'http://www.google.com/s2/favicons?domain=' + bm.domain}/>
        
        <a className='bookmark_link' id={bm.id + 'b'} href={bm.url} target='_blank'
          onClick={()=>{e.preventDefault();}}>
          {bm.title}
        </a>
        
      </div>
    );
  }
}

// <img className='bookmark_image' id={bm.id + 'c'} src={'../_favicons/' + bm.favicon_local}/>

// <img className='bookmark_image' id={bm.id + 'c'} src={'http://www.google.com/s2/favicons?domain=google.com'}/>

export default PageFaveContentTag1Tag0Fave;