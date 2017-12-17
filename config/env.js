module.exports = ({settings, variables}) => ({
  router: {
    local: {
      port: { value: 'localhost:3000', overwrite: false },
    },
    remote1: {
      port: 3000, // use case for transform()
      cors_whitelist: { value: 'localhost:3000', refresh: true, overwrite: true },
    },
    remote0: {
      port: 3000,
    },
  },
  mail: {}
});

// @todo if a user gives us an obj, we have no way of knowiing if its a config obj or a value.
//   need to require an obj.
