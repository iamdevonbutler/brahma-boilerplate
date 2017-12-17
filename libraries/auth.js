module.exports = {
  export: ({env, apps, load}) => ({
    'isAuthenticated': load.resource('./isAuthenticated'),
    'autenticate': load.resource('./autenticate'),
  })
};
