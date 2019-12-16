class URL {
  
  constructor (url) {

    // holds parsed elements using Crockford's Regex
    this.arr = [];

    // holds named elements we want to keep from the Regex
    this.obj = {};

    // start construction with an empty string or the URL we want to parse
    this.obj.url = url;
  }

  updateURL (url) {
    this.obj.url = url;
    if(this.obj.url) {
      this.parseURL();
      this.makeObj();
      this.validateByTDL();
      this.removeWWW();
    } else {
      this.clearObj();
    }
  }

  // break down Douglas Crockford's regexp so it is readable
  // groups, index, and input are also available on the array
  parseURL () {

    // 0 - input
    let start =     '^';
    let protocol =  '(?:([A-Za-z]+):)?';   // 1
    let slash =     '(?:\\/{0,3})';        
    let domain =    '([0-9.\\-A-Za-z]+)';  // 2
    let port =      '(?::(\\d+))?';        // 3
    let path =      '(?:\\/([^?#]*))?';    // 4
    let query =     '(?:\\?([^#]*))?';     // 5
    let hash =      '(?:#(.*))?';          // 6
    let end =       '$';
    let whole = start + protocol + slash + domain + port + path + query + hash + end;
    let regexp = new RegExp(whole, 'g');
    this.arr = regexp.exec(this.obj.url);    
  }

  // solves the edge case error of empty string
  clearObj () {

    // formed from URL regular expression
    this.obj.protocol = '';
    this.obj.domain = '';
    this.obj.port = '';
    this.obj.path = '';
    this.obj.query = '';
    this.obj.hash = '';

  }

  // grab the elements we want and put in an object
  makeObj () {

    // formed from URL regular expression
    this.obj.protocol = this.arr[1];
    this.obj.domain = this.arr[2];
    this.obj.port = this.arr[3];
    this.obj.path = this.arr[4];
    this.obj.query = this.arr[5];
    this.obj.hash = this.arr[6];

  }

  // check for a TLD - top level domain
  // this is the minimal we need to form a correct URL
  // oddly this is not guaranteed in Crockford's regexp
  // add 4 new properties to our object
  validateByTDL () {
    let regexp = new RegExp('\\.([A-Za-z]+)$', 'g');
    let res = regexp.exec(this.obj.domain);
    if(res){
      this.obj.tld = res[1];
      this.obj.name = this.obj.domain.slice(0, res.index);
      this.obj.valid = true;
      this.obj.message = false;
    } else {
      this.obj.tld = '';
      this.obj.name = '';
      this.obj.valid = false;
      this.obj.message = 'Please enter a valid URL';
    }
  }

  // remove www. if it exists
  removeWWW () {
    if(this.obj.name.slice(0, 4) === 'www.'){
      this.obj.name = this.obj.name.slice(4);  
    }
  }

}

export default URL;

  // we can't modify this.obj.url for controlled forms if we modify the url as this will show up in the input
  // 
  // // add defaults similar to <a> element
  // addDefaults () {
  //   if(!this.obj.protocol){
  //     this.obj.protocol = 'http';
  //   }
  //   this.obj.url = 'http://' + this.obj.url;
  // }

    // this.addDefaults();
