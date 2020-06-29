const defaultStore = {

  Apex: {
    current: false
  },

  User:{
    current: false
  },
  
  Menu: {
    current: 'Articles',
    status: false
  },

  Modal: {
    on: false,
    data: false
  },

  Bookmarks: {
    bookmarks: ['not lodaded']
  },

  Articles: {
    articles: ['not loaded']
  },

  MenuFave: {
    current: 'all'
  },

  URL: {
    current: {
      domain: 'test.com'
    }
  }

};

export default defaultStore;