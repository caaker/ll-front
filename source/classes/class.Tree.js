
class Tree {

  constructor () {
  }
  // returns an object of objects of arrays
  createHierarchy (table) {
    const tree = {};
    table.forEach((item) => {
      const tag0 = item.tag0;
      const tag1 = item.tag1;
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
