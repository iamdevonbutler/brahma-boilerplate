const self = module.exports;

self.config = {
  name: 'sslVerify',
};

// @todo what gets injeted. need access to resources, in memory objects and static files.
self.main = () => {
  return {
    err: null,
    warning: null,
    success: 'verified',
  };
};
