
class Tree {

  constructor () {
  }
  // returns the n-ary / array model of how to organize domains
  // returns an object of objects of arrays - {} - {} - []
  // start with an array of objects returned from mysql: [] - {}
  createTree1 (db) {
    const tree = {};
    db.forEach((item) => {
      const tag0 = item.tag0;
      const tag1 = item.tag1;
      tree[tag1] || ( tree[tag1] = {} );
      tree[tag1][tag0] || ( tree[tag1][tag0] = [] );
      tree[tag1][tag0].push(item);
    });
    this.sortByTitle(tree);
    return tree;
  }

  // tag1 is not longer abstacted out of the db, it is set explicitly
  // tag0 comes from db
  // add a title as it is not contained in the database
  // remove duplicates by domain
  createTree2 (db, tag1) {
    const tree = {};
    tree[tag1] || ( tree[tag1] = {} );
    db.forEach((item) => {
      const tag0 = item.tag0;
      tree[tag1][tag0] || ( tree[tag1][tag0] = [] );
      let test = item.domain.split(".");
      item.title = test[test.length - 2];
      tree[tag1][tag0].push(item);
    });
    this.sortByTitle(tree);
    // this.makeUnique(tree, tag1);
    return tree;
  }


  // fix the foo.boo.com & moo.boo.com issue later
  createTree3 (db, tag1) {
    const tree = {};

    // level - tag1
    tree[tag1] || ( tree[tag1] = {} );
    db.forEach((item) => {

      // level - tag0
      const tag0 = item.tag0;
      tree[tag1][tag0] || ( tree[tag1][tag0] = {} );
      
      // level - domain
      let domain = item.domain;

      if (Array.isArray( tree[tag1][tag0][domain] )){
        // console.log('DEBUG: tree[tag1][tag0][domain] array found: ', )
      } else {
        // console.log('DEBUG: tree[tag1][tag0][domain] array created: ', )
        tree[tag1][tag0][domain] = [];
        tree[tag1][tag0][domain]['meta'] = item;

      }
      
      // level - url
      tree[tag1][tag0][domain].push(item);
    });
    // console.log(tree);
    return tree;
  }


    //   let test = item.domain.split(".");
    //   item.title = test[test.length - 2];
    // this.sortByTitle(tree);
    // this.makeUnique(tree, tag1);


  makeUnique(tree, tag1){
    let unique = [];
    Object.keys(tree[tag1]).forEach((tag0)=>{
      unique = [];
      tree[tag1][tag0] = tree[tag1][tag0].filter((item)=>{
        if(unique.includes(item.domain) === false ){
          unique.push(item.domain);
          return true;
        } else {
          item.domain
          return false;
        }
      });
    });
  }

  sortByTitle (tree) {
    Object.keys(tree).forEach((tag1) => {
      Object.keys(tree[tag1]).forEach((tag0) => {
        tree[tag1][tag0].sort((bookmark1, bookmark2) => {
          return (bookmark1.title > bookmark2.title);
        });
      });
    });
  }

  // rewrite to simply use filter()
  filterByTag (tree, search) {
    let obj = {};
    if(!tree) {
      return obj;
    }
    Object.keys(tree).forEach((tag1) => {
      obj[tag1] = {};
      Object.keys(tree[tag1]).forEach((tag0) => {
        if(search === '' || search === undefined || tag0.includes(search)){
          obj[tag1][tag0] = tree[tag1][tag0];
        }
      });
    });
    return obj;
  }
}

export default new Tree();
