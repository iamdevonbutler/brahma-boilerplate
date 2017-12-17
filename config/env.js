module.exports = {
  export({settings, variables}) {
    return {
      'router.local.username': {value: 'localhost:3000', writable: false, refresh: false},
      'router.local.port': {value: 'localhost:3000', writable: false, refresh: false},
      'router.remote1.password': {value: 100, writable: false, refresh: false},
      'mail.remote0.cors_whitelist': {value: 3000, writable: false, refresh: false},
      'mail.remote1.cors_whitelist': {value: 3000, writable: false, refresh: false},
    };
  }
};
// if a user gives us an obj, we have no way of knowiing if its a config obj or a value.
//   need to require an obj.
// lauren should come hang out w/ me sometimes.
