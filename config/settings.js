module.exports = {
  delimiter: '$brahma',
  projectName: 'brahma', // use case for data, vultr API params
  serverLogBufferInterval: 3000,
  bufferServerLogs: false,
  localEnvironment: 'development',
  nodeVersion: '9.0.0',
  openGenertedInAtom: true,
  openGenertedInSublime: false,
  commands: {
    status: {
      pre() {},
      post() {},
      addCommand({add, addMultiple, helpers}) {
        add({
          name: '',
          main: helpers.call('eol')
        });
      },
    }
  }
};
