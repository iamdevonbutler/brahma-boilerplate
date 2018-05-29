module.exports = {
  name: {
    src: 'npm', // default. optional
    name: 'url',
    user: '', // for scoped packages and all github packages.
    token: '', // for private repos
    version: '' // validate to make sure there are no carrots or tildes. if blank, download latest and add this field.
  },
};
