const defaultStore = {

  // shows wether top bar is displayed or not
  Apex: {
    current: false
  },

  // holds the id of the current user or false if noboby is logged in
  User:{
    current: false
  },
  
  // holds the current page as well as the status of the menu - show or don't show
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

  Bookmarks: {
    bookmarks: false
  },

  Articles: {
    articles: false
  },

  // holds the current bookmark Menu
  MenuFave: {
    current: 'all'
  },

  // holds the current URL in the favicon finder app
  // move this to local state
  URL: {
    current: {
      domain: 'test.com'
    }
  }

};

export default defaultStore;