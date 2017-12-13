const common = {

};

module.exports = (env) => {

  return {
    api: {
      ...common,
      http: true,
    },
    mail: {
      ...common,
    },
  };
};
