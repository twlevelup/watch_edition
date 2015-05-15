module.exports = {
  options: {
    verbose: false,
    low: null,
    med: /(TODO|FIXME)/
  },
  vendor: {
    src: ['client/src/js/**/*.js', 'client/spec/**/*.js']
  }
};
