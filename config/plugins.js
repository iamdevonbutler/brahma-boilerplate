module.exports = ({settings, variables, env, apps, remote, dbs, load}) => {
  helper: [
    {src: load.plugins('helpers')},
  ],
  commands: [
    {name: 'brahma-command-watch', user: 'iamdevonbutler', source: 'git', version: '*', options: {}}
  ],
  new: {
    'brahma-new-airbnb': '',
  }, // obj or array of obj. adds commands to `new`
  generate: {
    'brahma-generate-resources': '', // adds, and removes shit.
    'brahma-generate-decorators': '',
  }, // obj or array of obj. adds commands to `new`
  deploy: {
    heroku: {
      'brahma-plugin-docker': 'latest', // 'pre deploy' stage. deploy plugins register a stage.
      'brahma-plugin-heroku': '', // 'deploy' stage
      'brahma-plugin-changelog': '', // 'post deploy' stage
    },
    digitalOcean: {

    },
    // Plugins are aggregated by stage, then chained together at each stage.
  }, // obj or array of obj. registers deploy methods, each method having multiple custom commands. there is a use case for having one middleware dockerize shit and other send it remote. the middleware need to work together, so there will be different hooks and each middleware will subscribe to their respective hooks
  logger: {
    'brahma-plugin-winston':  '',
  }, // obj or array. can support multiple loggers.
  middleware: {
    'brahma-middleware-ratelimiter': '', // @todo middleware stages like deploy stages. this is an early stage middlware.
    // I think the ratelimiter should be configured here as a integration and
    // neo should expose functions to load middleware at different stages.
  },
  database: {
    'brahma-database-mongorules': '',
  },
  apps: {
    'brahma-app-cron': 'latest', // apps need a way to integrate w/ resources. cron adds a cron property to resources.
    'brahma-app-docs': 'latest', // 3 things u gotta know about apps. they go in build automatically, they dynamically accept config (live updates too), they hook into resources and are fed them. they also hook into static, cuz u could make a CDN app server or something.
  },
  smtpRelay: {
    'brahma-plugin-smtp': '',
  }, // multiple mailers. shou;d this be an app.
  staticAnalysis: {
    'brahma-plugin-usestrict': '', // @todo what are the stages that call this. test and build. is that it?
  }, // currently no use cases for this.
  build: {
    'brahma-plugin-humans': '',
  }
};
