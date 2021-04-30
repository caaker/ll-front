
class Header {
  constructor () {
    this.addMeta();
    this.addTitle();
    this.addFavicon();
    this.addBackground();
  } 
  addMeta () {
    // dynamic meta data
    // http://stackoverflow.com/questions/18982228/how-to-add-meta-tag-in-javascript
  }
  addTitle () {
    document.title = "livelong";
  }
  addFavicon () {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon'; 
    link.href = 'dist/images/png/favicon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  addBackground () {
    const url = "https://i.imgur.com/ienF7ad.png";
    document.body.style.background = "url(" + url + ")";
  }
}

export default new Header();

