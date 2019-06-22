
class Tree {

  constructor () {
  }

  // Creates an object of object of arrays
  createHierarchy (table) {
    let tree = {};
    table.forEach((item) => {
      let tag0 = item.tag0;
      let tag1 = item.tag1;
      tree[tag1] || ( tree[tag1] = {} );
      tree[tag1][tag0] || ( tree[tag1][tag0] = [] );
      tree[tag1][tag0].push(item);
    });
    this.sortByBookmarkTitle(tree);
    return tree;
  }

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
    let obj = {};
    Object.keys(tree).forEach((tag1) => {
      obj[tag1] = {};
      Object.keys(tree[tag1]).forEach((tag0) => {
        if(search === '' || tag0.includes(search)){
          obj[tag1][tag0] = tree[tag1][tag0];
        }
      });
    });
    return obj;
  }

}

export default new Tree();
