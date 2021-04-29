import React from 'react';
import './ZFave.css';

class ZFave extends React.Component {

  constructor(props) {
    super(props);
  }

  bookmarkClicked (url) {
    window.open(url, '_blank');
  }

  render () {
    const bookmark = this.props.bookmark;

    return (

      <div id={bookmark.id + 'a'} 
           className = 'bookmark_div' 
           onClick = {() => {this.bookmarkClicked(bookmark.url)}} >
        
        <img className='bookmark_image' 
             src = {'http://www.google.com/s2/favicons?domain=' + bookmark.domain}/>
        
        <a className='bookmark_link' 
           href = {bookmark.url} 
           target='_blank'
           onClick = {() => {e.preventDefault();}}>
           {bookmark.title || bookmark.domain}
        </a>
        
      </div>

    );
  }
}

export default ZFave;
