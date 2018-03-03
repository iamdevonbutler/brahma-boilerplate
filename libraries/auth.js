module.exports = ({load}) => ({
  'isAuthenticated': load.resource('./isAuthenticated'),
  'autenticate': load.resource('./autenticate'),
});
