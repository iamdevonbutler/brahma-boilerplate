// @todo exactly how we handle multiple plugins is a todo
// and it can be different for each item
module.exports = {
  helpers: require('brahma-plugin-extrahelpers'), // obj or array of obj. adds commands to `helpers`
  new: require('brahma-plugin-basicBoilerplate'), // obj or array of obj. adds commands to `new`
  deploy: require('brahma-plugin-docker'), // obj or array of obj. registers deploy methods, each method having multiple custom commands. there is a use case for having one middleware dockerize shit and other send it remote. the middleware need to work together, so there will be different hooks and each middleware will subscribe to their respective hooks
  logger: require('brahma-plugin-winston'), // obj or array. can support multiple loggers.
  middleware: require('brahma-plugin-ratelimiter'), //
  database: require('brahma-plugin-mongorules'),
  apps: [
    require('brahma-plugin-cron'), // apps need a way to integrate w/ resources. cron adds a cron property to resources.
    require('brahma-plugin-docs'), // 3 things u gotta know about apps. they go in build automatically, they dynamically accept config (live updates too), they hook into resources and are fed them. they also hook into static, cuz u could make a CDN app server or something.
  ],
  mail: require('brahma-plugin-mail'), // multiple mailers.
  staticAnalysis: require('brahma-plugin-staticifier'), // currently no use cases for this.
};
