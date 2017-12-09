module.exports = {
  require: {
    'help': './parse-help',
  },
  testRequire: {
    'fixture': './fixture',
  },
  test({help}, {expect}, {fixture}) {
    // how to load fixture.
  },
  main({help}) {
    // how to load another file.
    return help.call(null);
  }
};
