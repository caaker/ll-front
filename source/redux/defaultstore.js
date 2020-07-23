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
  Menu: {
    current: 'Articles',
    status: false
  },

  // is the modal displayed, also if it is pre-poulated with data ( sent from ?? )
  Modal: {
    on: false,
    data: false
  },

  // holds bookmark data
  Bookmarks: {
    bookmarks: ['not lodaded']
  },

  // holds articles data
  Articles: {
    articles: ['not loaded']
  },

  // holds the current bookmark Menu
  MenuFave: {
    current: 'all'
  },

  // holds the current URL in the favicon finder app
  URL: {
    current: {
      domain: 'test.com'
    }
  }

};

export default defaultStore;