module.exports = {
  delimiter: '$brahma',
  projectName: 'brahma', // use case for data, vultr API params
  serverLogBufferInterval: 3000,
  bufferServerLogs: false,
  localEnvironment: 'development',
  nodeVersion: '9.0.0',
  openGenertedInAtom: true,
  openGenertedInSublime: false,
  remoteErrorHandling: { // @todo how to update remote if this value is changed.
    notify: ['j@example.com'], // last try catch / uncaught exception emailer.
  },
};
