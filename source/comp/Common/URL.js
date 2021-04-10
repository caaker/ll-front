class URL {
  
  constructor (url) {

    // holds parsed elements using Crockford's Regex
    this.arr = [];

    // holds named elements we want to keep from Crockford's Regex
    this.obj = {};

    // start construction with an empty string or the URL we want to parse
    this.obj.url = url;

    this.debug = true;
  }

  updateURL (url) {
    this.obj.url = url;
    

    this.debug && console.log('DEBUG:URL.updateURL()', url);

    if(typeof this.obj.url === 'string') {
      this.parseURL();
      this.makeObj();
      this.validateByTLD();
      this.removeWWW();
    } else {
      this.debug && console.log('DEBUG: Why are you passing garbage into this.obj.url?', this.obj.url);
      this.clearObj();
    }
  }

  parseURL () {
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
    
    // this.arr holds the "parsed" URL using Crockfords Regex
    this.arr = regexp.exec(this.obj.url);    
  }

  // extract the elements we want and put in an object
  makeObj () {
    this.debug && console.log('DEBUG: URL.makeObj()', this.arr);
    if(this.arr){
      this.obj.protocol = this.arr[1]; // broken
      this.obj.domain = this.arr[2];
      this.obj.port = this.arr[3];
      this.obj.path = this.arr[4];
      this.obj.query = this.arr[5];
      this.obj.hash = this.arr[6];       
    }

    // if the regex does not match the URL, the regex will return null
    if(this.arr === null){
      this.clearObj();
    }
  }

  // solves the edge case error of empty string
  clearObj () {
    // this.debug && console.log('DEBUG: URL.clearObj() called');

    this.obj.protocol = '';
    this.obj.domain = '';
    this.obj.port = '';
    this.obj.path = '';
    this.obj.query = '';
    this.obj.hash = '';

    // don't forget to reset created properties
    this.obj.tld = '';
    this.obj.name = '';
    this.obj.valid = false;
  }

  // check for a TLD - top level domain
  // this is the minimal we need to form a correct URL to find a favicon
  // adds 3 new properties to our object - tld, name, valid
  validateByTLD () {
    let regexp = new RegExp('\\.([A-Za-z]+)$', 'g');
    let res = regexp.exec(this.obj.domain);
    if(res){
      this.obj.tld = res[1];
      this.obj.name = this.obj.domain.slice(0, res.index);
      this.obj.valid = true;
    } else {
      this.obj.tld = '';
      this.obj.name = '';
      this.obj.valid = false;
    }
  }

  // remove www. if it exists, have not found a use for it
  removeWWW () {    
    let test = this.obj.name.slice(0, 4)
    if(test === 'www.'){
      this.obj.name = this.obj.name.slice(4);
      this.obj.domain = this.obj.domain.slice(4);
    }
  }

}

export default URL;