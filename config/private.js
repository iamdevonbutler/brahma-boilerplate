module.exports = {
  name: 'config.private', // name: resourceType.name.with.dots.or.no.dots
  require: {
    path: 'path'
  },
  export({load}) {
    return {
      'google.api.key': load.resource('config/google').apiKey,
      'ssl.cert': read('config/certs/cert'),
      'ssl.key': read('config/certs/key'),
    };
  }
};
