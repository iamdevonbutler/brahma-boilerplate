const common = {

};

module.exports = (env) => ({
  api: {
    ...common,
    http: true,
    version: '0.1.0',
    description: '',
    mongorules: {
      defaultConnectionName: 'a',
      defaultDatabaseName: 'a',
    },
    dependencies: {
      jsmoves: "latest",
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
});
