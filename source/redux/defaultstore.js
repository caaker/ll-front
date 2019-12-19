const defaultStore = {
  Apex: {
    current: false
  },
  
  Menu: {
    current: 'Articles',
    status: false
  },

  MenuFave: {
    current: 'all'
  },

  User:{
    current: null
  },

  URL: {
    current: {
      domain: 'test.com'
    }
  }
};

export default defaultStore;