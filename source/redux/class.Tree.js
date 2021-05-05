
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
    let tree = {};
    db.forEach((item) => {
      const tag0 = item.tag0;
      tree[tag1] || ( tree[tag1] = {} );
      tree[tag1][tag0] || ( tree[tag1][tag0] = [] );
      item.title = item.domain.split(".")[0];
      if(tree[tag1][tag0]){
        tree[tag1][tag0].push(item);  
      }
    });

    this.sortByTitle(tree);

    let unique = [];
    Object.keys(tree[tag1]).forEach((tag0)=>{
      unique = [];

      tree[tag1][tag0] = tree[tag1][tag0].filter((item)=>{
        if(unique.includes(item.domain) === false && item.domain !== "youtube.com"){
          unique.push(item.domain);
          return true;
        } else {
          item.domain
          return false;
        }
      });

    });

    return tree;
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
