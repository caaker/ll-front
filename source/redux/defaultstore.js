const defaultStore = {

  // holds the id of the current user or false if noboby is logged in
  User:{
    current: false
  },

  Articles: {
    articles: false
  },

  Domains: {
    domains: false
  },

  Bookmarks: {
    bookmarks: false
  },

  App: {
    current: true
  },

  Apex1: {
    current: false
  },

  // change to MenuPage
  Menu: {
    current: 'Articles',
    status: false
  },

  // is the modal displayed, also if it is pre-poulated with data
  Modal: {
    on: false,
    data: false
  },

  Modal2: {
    on: false,
    data: false
  },

  // holds the current bookmark Menu
  MenuFave: {
    current: 'health'
  },

  // holds the current URL in the favicon finder app
  // move this to local state
  URL: {
    current: {
      domain: 'test.com'
    }
  },

 Search: {
    current: ""
  }

};

export default defaultStore;