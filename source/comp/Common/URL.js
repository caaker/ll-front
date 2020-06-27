class URL {
  
  constructor (url) {

    // holds parsed elements using Crockford's Regex
    this.arr = [];

    // holds named elements we want to keep from the Regex
    this.obj = {};

    // start construction with an empty string or the URL we want to parse
    // do not modify this.obj.url as it mirrors a controlled form
    this.obj.url = url;

    this.debug = false;
  }

  updateURL (url) {
    this.debug && console.log('DEBUG: URL.updateURL() called');

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
    
    // this.arr holds the "parsed" URL
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
  // add 3 new properties to our object - tld, name, valid
  validateByTDL () {
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
    // console.log(this.obj);
  }

  // remove www. if it exists
  removeWWW () {    
    let test = this.obj.name.slice(0, 4)
    
    this.debug && console.log('DEBUG: URL.xxx called', test);

    if(test === 'www.'){
      this.obj.name = this.obj.name.slice(4);
      this.obj.domain = this.obj.domain.slice(4);
    }
  }

}

export default URL;