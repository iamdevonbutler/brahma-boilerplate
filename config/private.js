module.exports = {
  name: 'config.private', // name: resourceType.name.with.dots.or.no.dots
  require: {
    path: 'path'
  },
  // export can be a func that returns an obj or array or a obj or array
  export({load}) {
    return {
      'google.api.key': load.resource('config/google').apiKey,
      'ssl.cert': read('config/certs/cert'),
      'ssl.key': read('config/certs/key'),
    };
  }
};
