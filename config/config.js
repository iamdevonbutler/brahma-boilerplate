// config for your configs.
module.exports = ({settings, load}) => ({
  data: { // data to get passed to configs. flat keys. @todo gimme some use cases.
    commonVariable: 'data', // use variables if this data will be used in your apps as well.
  },
  import: {
    'path': load.node('path'),
  },
});
