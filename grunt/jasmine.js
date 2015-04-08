module.exports = function (grunt, options) {
  return {
    all: {
        src: "client/js/**/*.js",
        options: {
          specs: "spec/**/*.js"
          // vendor: "public/js/vendor/**/*.js"
        }
      }
    };
};
