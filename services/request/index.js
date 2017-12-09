module.exports = {
  require: {
    'Axios': 'axios',
  },
  main({Axios}) {
    return new Axios();
  }
};
