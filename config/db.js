module.exports = ({settings, variables, env, apps, remote}) => ({
  register: [{
    command: 'import',
    name: dbName,
    from: 'local',
    to: 'production',
    async main({shell}) {
      await shell.exec('mongorestore -h ds121980.mlab.com:21980 -d heroku_p5c8sppv -u <user> -p <password> <input db directory>');
    },
  }, {
    command: 'backup',
    name: dbName,
    main({argv}) {
      const [location] = argv;
    }
  },{
    command: 'custom',
    // ....
  }, {
    command: 'export',
  }, {
    command: 'download',
  }, {
    command: 'run',
  }, {

  }],
  connections: {
    dnName: {
      local: {
        username: '',
        password: null,
      },
      production: {
        username: '',
        password: load.private('passwords').mongoLocal,
        connect: 'mongo ds121980.mlab.com:21980/heroku_p5c8sppv -u <dbuser> -p <dbpassword>',
      }
    }
  }
});
