class URL {
  
  constructor (url) {

    // holds parsed elements using Crockford's Regex
    this.arr = [];

    // holds named elements we want to keep from the Regex
    this.obj = {};

    // holds url that is parsed into this.arr and this.obj
    this.obj.url = url;

    // update on instantiation
    this.updateURL(url);
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

  // break down DC's regexp so it is readable
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

  makeObj () {
    this.obj.protocol = this.arr[1];
    this.obj.domain = this.arr[2];
    this.obj.port = this.arr[3];
    this.obj.path = this.arr[4];
    this.obj.query = this.arr[5];
    this.obj.hash = this.arr[6];
  }

  clearObj () {
    this.obj.protocol = '';
    this.obj.domain = '';
    this.obj.port = '';
    this.obj.path = '';
    this.obj.query = '';
    this.obj.hash = '';
  }

  // check for a TLD, minimal we need for correctness
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
  }

  // remove www. if it exists
  removeWWW () {
    if(this.obj.name.slice(0, 4) === 'www.'){
      this.obj.name = this.obj.name.slice(4);  
    }
    if(this.obj.domain.slice(0, 4) === 'www.'){
      this.obj.domain = this.obj.domain.slice(4);  
    }
  }

}

export default URL;