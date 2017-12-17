const common = {

};

module.exports = ({settings, variables, env, private}) => {
  export() {
    return {
      api: {
        ...common,
        http: {
          ipv6: '', // validate via https://www.npmjs.com/package/ip-address
          port: env.get('port', 'remote0'),
        },
        security: {
          ssl: {
            key: private.get('ssl.key'),
            cert: private.get('ssl.cert'),
          }
        },
        injectables: { // handled same as the 'require' resource property
          fs: 'fs',
          path: 'path',
        },
      },
      mail: {
        ...common,
      },
    };
  }
};
