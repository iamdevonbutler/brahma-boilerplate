module.exports = (env) => {
  var https;
  if (env.api.NODE_ENV === 'development') {
    https = {
      key: require('./path/to/key'),
      cert: require('./path/to/cert'),
    };
  }
  else {
    https: false;
  }
  return {
    https,
    ratelimiter: {},
    cors: {},
  };
};
