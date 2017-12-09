const common = {

};

module.exports = (env) => {

  return {
    api: {
      ...common,
      http: true,
      mongorules: {
        defaultConnectionName: 'a',
        defaultDatabaseName: 'a',
      },
      dependencies: {
        koa: "latest",
      },
    },
    mail: {
      ...common,
    },
    // api2: {
    //   ...common,
    // },
    // api3: {
    //   ...common,
    // },
    // api4: {
    //   ...common,
    // },
  };
};
