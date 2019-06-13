class URL {
  
  constructor (url) {
    url = url || '';
    this.arr = [];
    this.obj = {};
    this.obj.url = url;
    this.obj.input = url;
  }

  updateURL (url) {
    this.obj.url = url;
    this.obj.input = url;
    this.parseURL();
    this.makeObj();
    this.addDefaults();
    this.validateByTDL();
    this.removeWWW();
  }

  // break down Douglas Crockford's regexp so it is readable
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
    let test = regexp.exec(this.obj.url);
    if (test) {
      this.arr = test;
    }
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

  // add defaults similar to <a> element
  addDefaults () {
    if(!this.obj.protocol){
      this.obj.protocol = 'http';
    }
    this.obj.url = 'http://' + this.obj.url;
  }

  // check for a TLD - top level domain
  // this is the minimal we need to form a correct URL
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
