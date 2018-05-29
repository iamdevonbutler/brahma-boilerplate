module.exports = ({load, read}) => ({
  name: 'config.private', // name: resourceType.name.with.dots.or.no.dots
  require: {
    path: 'path'
  },
  export: {
    'google.api.key': load.resource('config/google').apiKey,
    'ssl.cert': read('config/certs/cert'),
    'ssl.key': read('config/certs/key'),
  }
});
