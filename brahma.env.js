module.exports = (config) => ({
  api: {
    development: {
      PORT: { value: 'localhost:3000', overwrite: false },
    },
    test: {
      PORT: 3000,
      CORS_WHITELIST: { value: 'localhost:3000', refresh: true, overwrite: true },
    },
    production: {
      PORT: 3000,
    },
  },
  mail: {}
});
