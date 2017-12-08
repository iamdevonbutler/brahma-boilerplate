module.exports = {
  require: {
    'isAuthenticated': './isAuthenticated',
    'autenticate': './autenticate',
  },
  main({isAuthenticated, authenticate}) {
    return {
      isAuthenticated,
      autenticate,
    };
  },
  export: {
    'isAuthenticated': './isAuthenticated',
    'autenticate': './autenticate',
  },
  export({env, apps, }) {

  }
};


// ------------------------------------------------------------------------------ ///

module.exports = {
  isAuthenticated: require('./isAuthenticated'),
  autenticate: require('./authenticate'),
};
