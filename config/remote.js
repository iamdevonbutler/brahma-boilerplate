module.exports = ({settings, variables, env, apps}) => ({
  vultr: {
    apiKey: '3L3I4OFDRXFMJM3XK4ZNK3X4QDOKWVFERA6Q',
    env: {
      remote0: {
        router: {
          // @todo the vultr-plugin needs to provide ids for this data.
          nodes: 2,
          region: '', // wants an ID
          os: '', // wants and id
          size: '', // id
          ipv6: true,
          name: 'brahma-stage-router', // ubuntu-2gb-nyc3-01
          backups: true,
          proxy: {
            // proxy will inherit parents
            region: '',
            os: '',
            size: '',
            ipv6: true,
            name: '',
            // proxy plugin registers a name brahma-router-stage-nginx
          }
        },
        worker: {nodes: 1},
      },
      remote1: {
        router: {nodes: 4},
        worker: {nodes: 2}, // if proxy === false, gonna ask u for some config for proxy
      },
    },
  }
});
