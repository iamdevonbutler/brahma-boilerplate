// @todo how to call other functions
// @todo how to handle a million of these util functions (can have folders?)
// @todo how to handle breaking dependencies. log via status.
// @todo running tests
// @todo require.
// @todo what are the special args for pre() post().

// pre() and post() - use case. context specific behavior while writing dry functions.
// test() - passes chai ({should, expect, asset}) as param 2 - or other assertion lib via integration.
module.exports = {
  name: 'thenify',
  docs: [],

  // type checking
  // truthy falsy
  // comparison
  // *i want to be able to query a function and know what it wants for params.
  // knowing arg info is great for documentation generators.
  // if the arg info is too verbose, have arg handling decorators.
  args: [{
    fn: (fn) => utils.isType(fn, 'function')
  }],
  args: [
    (value) => ,
    () => ,
  ],
  async args({}, ...args) {
    // async validation request.
    if ()
    return true;
  },
  eachArg(arg) {

  },
  args: [
    {
      name: 'goToMall',
      required: true, // !== undefined
      default: true, // set if === undefined
      types: (type) => [type.string, type.object, type.all],
      normalize({}, value) {},
      validate() {

      },
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
  require() {

  },
  require: [

  ],
  require: {

  },

  main(fn) {
    return new Promise(function(resolve, reject) {
      function callback(err, res) {
        if (err) return reject(err);
        return resolve(res);
      }
      fn(callback);
    });
  },
};
