// @todo how to call other functions
// @todo how to handle a million of these util functions (can have folders?)
// @todo how to handle breaking dependencies. log via status.
// @todo running tests
// @todo require.
// @todo what are the special args for pre() post().

// @todo BIG problem, what if a service's main file is too big and u wannt load some other files.

// pre() and post() - use case. context specific behavior while writing dry functions.
// test() - passes chai ({should, expect, asset}) as param 2 - or other assertion lib via integration.
module.exports = {
  name: 'thenify',
  docs: [],

  // Useful to make args shit less verbose.
  decorators: [
    {name: 'fastArg', args: ['goToMall', 'isOk']},
  ],

  // type checking
  // truthy falsy
  // comparison
  // *i want to be able to query a function and know what it wants for params.
  // knowing arg info is great for documentation generators.
  // if the arg info is too verbose, have arg handling decorators.
  args: [
    {
      name: 'goToMall',
      default: true, // set if === undefined
      required: true, // !== undefined
      types: (type) => [type.string, type.object, type.all],
      validate() {}, // use for comparisons.
      error: ({error, ctx}, ...args) => { // will return from func on error unless the user throws.
        return false;
        // ctx.name
        // error {
          // error.argName
          // error.argValue
          // error.type 'invalid type', 'validate()', 'required'
        // }
      },
      normalize({}, value) {},
    }
  ]

  pre({environment}, ...args) {
    console.log('fn called');
  },
  post({environment}, result) {
    console.log('fn result');
  },

  // brahma test utils.thenify
  async test({$ctx, $main}, {expect}) {
    const func = () => {};
    const result = await $main(func);
    expect(result).to.be.async;
  },

  // require other utils
  // require npm / github module
  // ... i think that's it.
  // can't require resources
  // might be able to lazy load dependencies this way (wont need to create a centralized list of dependencies)
  // should error if u try to install multiple bluebird versions on the same app? npm issue. npm doesnt error tho, it just installs the first package.
  // people dont want to look up the latest version here - lets automaitcally add this shit to our package.js file w/ a fixed version.
  // only use fixed versions
  require: {
    '{promise}': 'bluebird@latest', // need to compile statically for this to work. all good tho.
    'isType': './',
    '{parse}': '../services/a1', // @todo what about when ur requiring a util from a resource?
    'fs': '' // ? inject all node modules???
  },

  main({bluebird}, fn) {
    return new Promise(function(resolve, reject) {
      function callback(err, res) {
        if (err) return reject(err);
        return resolve(res);
      }
      fn(callback);
    });
  },
};
