// config for your configs.
module.exports = ({settings}) => {
  config: {
    data: { // data to get passed to configs. flat keys. @todo gimme some use cases.
      commonVariable: 'data' // use variables if this data will be used in your apps as well.
    },
    require: {
      'path': 'path',
    }
  },
};

// @todo think of config as, this is config for X (apps, dbs, plugins, config)
