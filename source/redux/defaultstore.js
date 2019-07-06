const defaultStore = {
  Apex: {
    current: false
  },
  
  Menu: {
    current: 'Clock',
    status: false
  },

  User:{
    current: null
  },

  URL: {
    current: {
      domain: 'twitter.com'
    }
  }
};

export default defaultStore;