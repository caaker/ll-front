
class Tree {

  constructor () {
  }

  // Creates an object of object of arrays
  createHierarchy (table) {

    // tree is our top level object
    let tree = {};

    // iterate the entire array of bookmarks
    table.forEach((item) => {
      // pull out tag0 and tag1 from item
      let tag0 = item.tag0;
      let tag1 = item.tag1;

      // second object is based on tag1
      tree[tag1] || ( tree[tag1] = {} );

      // finally the array
      tree[tag1][tag0] || ( tree[tag1][tag0] = [] );

      // create arrays of all the items with the same tags
      tree[tag1][tag0].push(item);
    });
    this.sortByBookmarkTitle(tree);
    return tree;
  }

  // iterates top two objects to get to the array which sort() is called upon
  sortByBookmarkTitle (tree) {
    Object.keys(tree).forEach((tag1) => {
      Object.keys(tree[tag1]).forEach((tag0) => {
        tree[tag1][tag0].sort((bookmark1, bookmark2) => {
          return (bookmark1.title > bookmark2.title);
        });
      });
    });
  }


  filterByTag (tree, search) {

    if(!tree){
      throw new Error('Tree.filteByTag requires an object passed as the first parameter');
    }
    let obj = {};
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
