// idk if this needs any params to do its thing.
module.exports = ({}) => ({
  import: ({load}) ({
    'npmmodule': load.npm('npmmodule'), // maybe have a load.github too.
    '{obj, aaa}': load.resource('./resource'), // realtive paths. this implementation might be difficult, could use jsmoves here. decode(encode('(path) => {return {obj, aaa} = require(path)}'))
  }),
  commands: [{
    command: 'rabbit', // this is how the other brahma modules interact w/ u.
    main({brahma, resources}) {
      brahma
        .command('remote')
        .subcommands('list', cb)
        .callback(argv => {
          // @todo how to register subcommands.
        });
    }
  }, {
    name: 'rabbit', // this is how the other brahma modules interact w/ u.
    main({brahma, resources}) {
      brahma
        .command('remote')
        .subcommands('list', cb)
        .callback(argv => {
          // @todo how to register subcommands.
        });
    }
  }],
});
