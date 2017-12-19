// idk if this needs any params to do its thing. don't think so.
module.exports = ({load}) => ({
  import: {
    'npmmodule': load.npm('npmmodule'),
    'rabbit': load.resource('commands/rabbit'), // ! need to be able to load using realtive paths too.
  },
  commands: ({rabbit, search}) => ([
    rabbit,
    search,
  ]),
});
