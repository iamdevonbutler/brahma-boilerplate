module.exports = {
  export: {
    'isAuthenticated': './isAuthenticated',
    'autenticate': './autenticate',
  },
  export({env, apps}) {
    return {
      'isAuthenticated': './isAuthenticated',
      'autenticate': './autenticate',
    };
  }
};
