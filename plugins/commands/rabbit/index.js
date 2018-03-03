// This is a "resource" it's type would be "command",
// which defines a schema, that incldues a "command" field,
// while still inheriting all required resource characteristics.
module.exports = {
  command: 'rabbit', // this is how the other brahma modules interact w/ u.
  options: {
    force: {
      keys: ['-f', '--force'],
      validate() {

      },
      error() {
        // return error if there is an erorr.
      },
      transform() {}
    },
  },
  validate() {

  },
  error() {

  },
  transform() {
    
  },
  main() {

  },
  subcommands: [{
    command: {},
    main(cli) {

    },
  }]
};
